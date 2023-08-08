import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class VerifyOtpDto {
    @ApiProperty()
    @IsString()
    username: string;
    @ApiProperty()
    @IsString()
    password: string;
    @ApiProperty()
    @IsString()
    otp: string;
}