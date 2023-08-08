import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class SendOtpDto {
    @ApiProperty()
    @IsNumber()
    userId: number;
    @ApiProperty()
    @IsString()
    phoneNumber: string;
}