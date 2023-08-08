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
exports.TicketUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const EnumTicketGender_1 = require("./EnumTicketGender");
const TravelWhereUniqueInput_1 = require("../../travel/base/TravelWhereUniqueInput");
const class_transformer_1 = require("class-transformer");
const UserTicketWhereUniqueInput_1 = require("../../userTicket/base/UserTicketWhereUniqueInput");
let TicketUpdateInput = class TicketUpdateInput {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketUpdateInput.prototype, "firstName", void 0);
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
], TicketUpdateInput.prototype, "gender", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketUpdateInput.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketUpdateInput.prototype, "nationalId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TicketUpdateInput.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => Number, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], TicketUpdateInput.prototype, "seatNumber", void 0);
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
    __metadata("design:type", Object)
], TicketUpdateInput.prototype, "travelId", void 0);
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
    __metadata("design:type", Object)
], TicketUpdateInput.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => Number, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], TicketUpdateInput.prototype, "vehicleId", void 0);
TicketUpdateInput = __decorate([
    graphql_1.InputType()
], TicketUpdateInput);
exports.TicketUpdateInput = TicketUpdateInput;
//# sourceMappingURL=TicketUpdateInput.js.map