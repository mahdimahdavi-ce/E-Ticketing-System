/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SeatWhereInput } from "./SeatWhereInput";
import { Type } from "class-transformer";
import { SeatOrderByInput } from "./SeatOrderByInput";

@ArgsType()
class SeatFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SeatWhereInput,
  })
  @Field(() => SeatWhereInput, { nullable: true })
  @Type(() => SeatWhereInput)
  where?: SeatWhereInput;

  @ApiProperty({
    required: false,
    type: [SeatOrderByInput],
  })
  @Field(() => [SeatOrderByInput], { nullable: true })
  @Type(() => SeatOrderByInput)
  orderBy?: Array<SeatOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SeatFindManyArgs as SeatFindManyArgs };