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
exports.Seat = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const Vehicle_1 = require("../../vehicle/base/Vehicle");
let Seat = class Seat {
};
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Seat.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Seat.prototype, "id", void 0);
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
], Seat.prototype, "isReserved", void 0);
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
], Seat.prototype, "seatNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Seat.prototype, "updatedAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => Vehicle_1.Vehicle,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => Vehicle_1.Vehicle),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], Seat.prototype, "vehicleId", void 0);
Seat = __decorate([
    graphql_1.ObjectType()
], Seat);
exports.Seat = Seat;
//# sourceMappingURL=Seat.js.map