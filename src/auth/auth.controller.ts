import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.services";
import { LoginDto } from "./dtos/login.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}
    
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() dto: LoginDto){
        return this.authService.login(dto);
    }
}