"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const StringFilter_1 = require("../../util/StringFilter");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const EnumTicketGender_1 = require("./EnumTicketGender");
const StringNullableFilter_1 = require("../../util/StringNullableFilter");
const FloatFilter_1 = require("../../util/FloatFilter");
const TravelWhereUniqueInput_1 = require("../../travel/base/TravelWhereUniqueInput");
const UserTicketWhereUniqueInput_1 = require("../../userTicket/base/UserTicketWhereUniqueInput");
let TicketWhereInput = class TicketWhereInput {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    class_transformer_1.Type(() => StringFilter_1.StringFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], TicketWhereInput.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: EnumTicketGender_1.EnumTicketGender,
    }),
    class_validator_1.IsEnum(EnumTicketGender_1.EnumTicketGender),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => EnumTicketGender_1.EnumTicketGender, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketWhereInput.prototype, "gender", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    class_transformer_1.Type(() => StringFilter_1.StringFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], TicketWhereInput.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    class_transformer_1.Type(() => StringFilter_1.StringFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], TicketWhereInput.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    class_transformer_1.Type(() => StringFilter_1.StringFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], TicketWhereInput.prototype, "nationalId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    class_transformer_1.Type(() => StringNullableFilter_1.StringNullableFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TicketWhereInput.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: FloatFilter_1.FloatFilter,
    }),
    class_transformer_1.Type(() => FloatFilter_1.FloatFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => FloatFilter_1.FloatFilter, {
        nullable: true,
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], TicketWhereInput.prototype, "seatNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TravelWhereUniqueInput_1.TravelWhereUniqueInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TravelWhereUniqueInput_1.TravelWhereUniqueInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TravelWhereUniqueInput_1.TravelWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", TravelWhereUniqueInput_1.TravelWhereUniqueInput)
], TicketWhereInput.prototype, "travelId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => UserTicketWhereUniqueInput_1.UserTicketWhereUniqueInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => UserTicketWhereUniqueInput_1.UserTicketWhereUniqueInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => UserTicketWhereUniqueInput_1.UserTicketWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", UserTicketWhereUniqueInput_1.UserTicketWhereUniqueInput)
], TicketWhereInput.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: FloatFilter_1.FloatFilter,
    }),
    class_transformer_1.Type(() => FloatFilter_1.FloatFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => FloatFilter_1.FloatFilter, {
        nullable: true,
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], TicketWhereInput.prototype, "vehicleId", void 0);
TicketWhereInput = __decorate([
    graphql_1.InputType()
], TicketWhereInput);
exports.TicketWhereInput = TicketWhereInput;
//# sourceMappingURL=TicketWhereInput.js.map