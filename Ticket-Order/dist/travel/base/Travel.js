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
exports.Travel = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const EnumTravelCategory_1 = require("./EnumTravelCategory");
const class_transformer_1 = require("class-transformer");
const Ticket_1 = require("../../ticket/base/Ticket");
const Vehicle_1 = require("../../vehicle/base/Vehicle");
let Travel = class Travel {
};
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: Number,
    }),
    class_validator_1.IsNumber(),
    graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], Travel.prototype, "basePrice", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: EnumTravelCategory_1.EnumTravelCategory,
    }),
    class_validator_1.IsEnum(EnumTravelCategory_1.EnumTravelCategory),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => EnumTravelCategory_1.EnumTravelCategory, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Travel.prototype, "category", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Travel.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Travel.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Travel.prototype, "destination", void 0);
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
], Travel.prototype, "discount", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Travel.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Travel.prototype, "source", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => [Ticket_1.Ticket],
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => Ticket_1.Ticket),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], Travel.prototype, "ticketId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Travel.prototype, "updatedAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => Vehicle_1.Vehicle,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => Vehicle_1.Vehicle),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], Travel.prototype, "vehicleId", void 0);
Travel = __decorate([
    graphql_1.ObjectType()
], Travel);
exports.Travel = Travel;
//# sourceMappingURL=Travel.js.map