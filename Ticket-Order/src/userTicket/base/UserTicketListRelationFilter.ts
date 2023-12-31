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
import { UserTicketWhereInput } from "./UserTicketWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserTicketListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserTicketWhereInput,
  })
  @ValidateNested()
  @Type(() => UserTicketWhereInput)
  @IsOptional()
  @Field(() => UserTicketWhereInput, {
    nullable: true,
  })
  every?: UserTicketWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserTicketWhereInput,
  })
  @ValidateNested()
  @Type(() => UserTicketWhereInput)
  @IsOptional()
  @Field(() => UserTicketWhereInput, {
    nullable: true,
  })
  some?: UserTicketWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserTicketWhereInput,
  })
  @ValidateNested()
  @Type(() => UserTicketWhereInput)
  @IsOptional()
  @Field(() => UserTicketWhereInput, {
    nullable: true,
  })
  none?: UserTicketWhereInput;
}
export { UserTicketListRelationFilter as UserTicketListRelationFilter };
