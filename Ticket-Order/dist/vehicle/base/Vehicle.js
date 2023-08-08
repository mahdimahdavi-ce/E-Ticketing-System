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
exports.Vehicle = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const EnumVehicleCategory_1 = require("./EnumVehicleCategory");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const Seat_1 = require("../../seat/base/Seat");
const Travel_1 = require("../../travel/base/Travel");
let Vehicle = class Vehicle {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: EnumVehicleCategory_1.EnumVehicleCategory,
    }),
    class_validator_1.IsEnum(EnumVehicleCategory_1.EnumVehicleCategory),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => EnumVehicleCategory_1.EnumVehicleCategory, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Vehicle.prototype, "category", void 0);
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
], Vehicle.prototype, "color", void 0);
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
], Vehicle.prototype, "corporation", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Vehicle.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Vehicle.prototype, "id", void 0);
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
    __metadata("design:type", Object)
], Vehicle.prototype, "numberOfSeats", void 0);
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
], Vehicle.prototype, "numberPlate", void 0);
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
], Vehicle.prototype, "ownerNationalId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => [Seat_1.Seat],
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => Seat_1.Seat),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], Vehicle.prototype, "seats", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => [Travel_1.Travel],
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => Travel_1.Travel),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], Vehicle.prototype, "travelId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Vehicle.prototype, "updatedAt", void 0);
Vehicle = __decorate([
    graphql_1.ObjectType()
], Vehicle);
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map