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
import { UserTicketWhereInput } from "./UserTicketWhereInput";
import { Type } from "class-transformer";
import { UserTicketOrderByInput } from "./UserTicketOrderByInput";

@ArgsType()
class UserTicketFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserTicketWhereInput,
  })
  @Field(() => UserTicketWhereInput, { nullable: true })
  @Type(() => UserTicketWhereInput)
  where?: UserTicketWhereInput;

  @ApiProperty({
    required: false,
    type: [UserTicketOrderByInput],
  })
  @Field(() => [UserTicketOrderByInput], { nullable: true })
  @Type(() => UserTicketOrderByInput)
  orderBy?: Array<UserTicketOrderByInput>;

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

export { UserTicketFindManyArgs as UserTicketFindManyArgs };
