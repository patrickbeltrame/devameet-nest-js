import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import * as CryptoJS from 'crypto-js'
import { RegisterDto } from "./dtos/register.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel : Model<UserDocument>){}

    async create(dto: RegisterDto){
        dto.password = CryptoJS.AES.encrypt(dto.password, process.env.USER_CYPHER_SECRET_KEY)

        const createdUser = new this.userModel(dto);
        await createdUser.save();
    }
    async existsByEmail(email : String) : Promise<Boolean>{
        const result = await this.userModel.findOne({email});

        if(result){
            return true
        }

        return false;
    }
}