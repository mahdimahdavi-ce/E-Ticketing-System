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
exports.Ticket = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const EnumTicketGender_1 = require("./EnumTicketGender");
const Travel_1 = require("../../travel/base/Travel");
const UserTicket_1 = require("../../userTicket/base/UserTicket");
let Ticket = class Ticket {
};
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Ticket.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Ticket.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        enum: EnumTicketGender_1.EnumTicketGender,
    }),
    class_validator_1.IsEnum(EnumTicketGender_1.EnumTicketGender),
    graphql_1.Field(() => EnumTicketGender_1.EnumTicketGender, {
        nullable: true,
    }),
    __metadata("design:type", String)
], Ticket.prototype, "gender", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Ticket.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Ticket.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Ticket.prototype, "nationalId", void 0);
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
], Ticket.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: Number,
    }),
    class_validator_1.IsNumber(),
    graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], Ticket.prototype, "seatNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => Travel_1.Travel,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => Travel_1.Travel),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], Ticket.prototype, "travelId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => Date, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "updatedAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => UserTicket_1.UserTicket,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => UserTicket_1.UserTicket),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], Ticket.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: Number,
    }),
    class_validator_1.IsNumber(),
    graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], Ticket.prototype, "vehicleId", void 0);
Ticket = __decorate([
    graphql_1.ObjectType()
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=Ticket.js.map