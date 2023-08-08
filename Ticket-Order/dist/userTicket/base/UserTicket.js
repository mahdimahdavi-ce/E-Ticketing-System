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
exports.UserTicket = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const Ticket_1 = require("../../ticket/base/Ticket");
let UserTicket = class UserTicket {
};
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], UserTicket.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserTicket.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Boolean,
    }),
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => Boolean, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserTicket.prototype, "isCanceled", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => Ticket_1.Ticket,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => Ticket_1.Ticket),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], UserTicket.prototype, "ticketId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], UserTicket.prototype, "updatedAt", void 0);
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
], UserTicket.prototype, "userId", void 0);
UserTicket = __decorate([
    graphql_1.ObjectType()
], UserTicket);
exports.UserTicket = UserTicket;
//# sourceMappingURL=UserTicket.js.map