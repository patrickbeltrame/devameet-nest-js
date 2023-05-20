import { IsBoolean, IsNumber, IsString, MIN, Max, Min } from "class-validator";
import { RoomMessagesHelper } from "../helpers/roommessages.helper";
import { JoinRoomDto } from "./joinroom.dto";
import { MeetMessagesHelper } from "src/meet/helpers/meetmessages.helper";

export class ToglMuteDto extends JoinRoomDto {

    @IsBoolean({message: RoomMessagesHelper.MUTE_NOT_VALID})
    muted: boolean;
}