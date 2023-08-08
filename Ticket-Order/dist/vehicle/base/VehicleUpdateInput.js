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
exports.VehicleUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const EnumVehicleCategory_1 = require("./EnumVehicleCategory");
const class_validator_1 = require("class-validator");
const SeatUpdateManyWithoutVehiclesInput_1 = require("./SeatUpdateManyWithoutVehiclesInput");
const class_transformer_1 = require("class-transformer");
const TravelUpdateManyWithoutVehiclesInput_1 = require("./TravelUpdateManyWithoutVehiclesInput");
let VehicleUpdateInput = class VehicleUpdateInput {
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
], VehicleUpdateInput.prototype, "category", void 0);
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
], VehicleUpdateInput.prototype, "color", void 0);
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
], VehicleUpdateInput.prototype, "corporation", void 0);
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
], VehicleUpdateInput.prototype, "numberOfSeats", void 0);
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
], VehicleUpdateInput.prototype, "numberPlate", void 0);
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
], VehicleUpdateInput.prototype, "ownerNationalId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => SeatUpdateManyWithoutVehiclesInput_1.SeatUpdateManyWithoutVehiclesInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => SeatUpdateManyWithoutVehiclesInput_1.SeatUpdateManyWithoutVehiclesInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => SeatUpdateManyWithoutVehiclesInput_1.SeatUpdateManyWithoutVehiclesInput, {
        nullable: true,
    }),
    __metadata("design:type", SeatUpdateManyWithoutVehiclesInput_1.SeatUpdateManyWithoutVehiclesInput)
], VehicleUpdateInput.prototype, "seats", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TravelUpdateManyWithoutVehiclesInput_1.TravelUpdateManyWithoutVehiclesInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TravelUpdateManyWithoutVehiclesInput_1.TravelUpdateManyWithoutVehiclesInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TravelUpdateManyWithoutVehiclesInput_1.TravelUpdateManyWithoutVehiclesInput, {
        nullable: true,
    }),
    __metadata("design:type", TravelUpdateManyWithoutVehiclesInput_1.TravelUpdateManyWithoutVehiclesInput)
], VehicleUpdateInput.prototype, "travelId", void 0);
VehicleUpdateInput = __decorate([
    graphql_1.InputType()
], VehicleUpdateInput);
exports.VehicleUpdateInput = VehicleUpdateInput;
//# sourceMappingURL=VehicleUpdateInput.js.map