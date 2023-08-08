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
  IsNumber,
  IsEnum,
  IsOptional,
  IsDate,
  IsString,
  ValidateNested,
} from "class-validator";
import { EnumTravelCategory } from "./EnumTravelCategory";
import { Type } from "class-transformer";
import { TicketCreateNestedManyWithoutTravelsInput } from "./TicketCreateNestedManyWithoutTravelsInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";

@InputType()
class TravelCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  basePrice!: number;

  @ApiProperty({
    required: false,
    enum: EnumTravelCategory,
  })
  @IsEnum(EnumTravelCategory)
  @IsOptional()
  @Field(() => EnumTravelCategory, {
    nullable: true,
  })
  category?: "Bus" | "Train" | "Airplane" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  date!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  destination!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  discount?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  source!: string;

  @ApiProperty({
    required: false,
    type: () => TicketCreateNestedManyWithoutTravelsInput,
  })
  @ValidateNested()
  @Type(() => TicketCreateNestedManyWithoutTravelsInput)
  @IsOptional()
  @Field(() => TicketCreateNestedManyWithoutTravelsInput, {
    nullable: true,
  })
  ticketId?: TicketCreateNestedManyWithoutTravelsInput;

  @ApiProperty({
    required: false,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => VehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicleId?: VehicleWhereUniqueInput | null;
}

export { TravelCreateInput as TravelCreateInput };
