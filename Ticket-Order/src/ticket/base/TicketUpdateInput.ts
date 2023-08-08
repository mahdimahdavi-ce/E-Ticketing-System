/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { EnumTicketGender } from "./EnumTicketGender";
import { TravelWhereUniqueInput } from "../../travel/base/TravelWhereUniqueInput";
import { Type } from "class-transformer";
import { UserTicketWhereUniqueInput } from "../../userTicket/base/UserTicketWhereUniqueInput";

@InputType()
class TicketUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string;

  @ApiProperty({
    required: false,
    enum: EnumTicketGender,
  })
  @IsEnum(EnumTicketGender)
  @IsOptional()
  @Field(() => EnumTicketGender, {
    nullable: true,
  })
  gender?: "Male" | "Female";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nationalId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  seatNumber?: number;

  @ApiProperty({
    required: false,
    type: () => TravelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TravelWhereUniqueInput)
  @IsOptional()
  @Field(() => TravelWhereUniqueInput, {
    nullable: true,
  })
  travelId?: TravelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserTicketWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserTicketWhereUniqueInput)
  @IsOptional()
  @Field(() => UserTicketWhereUniqueInput, {
    nullable: true,
  })
  userId?: UserTicketWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  vehicleId?: number;
}

export { TicketUpdateInput as TicketUpdateInput };