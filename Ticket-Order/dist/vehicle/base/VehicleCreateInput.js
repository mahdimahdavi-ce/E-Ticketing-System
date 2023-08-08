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
exports.VehicleCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const EnumVehicleCategory_1 = require("./EnumVehicleCategory");
const class_validator_1 = require("class-validator");
const SeatCreateNestedManyWithoutVehiclesInput_1 = require("./SeatCreateNestedManyWithoutVehiclesInput");
const class_transformer_1 = require("class-transformer");
const TravelCreateNestedManyWithoutVehiclesInput_1 = require("./TravelCreateNestedManyWithoutVehiclesInput");
let VehicleCreateInput = class VehicleCreateInput {
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
], VehicleCreateInput.prototype, "category", void 0);
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
], VehicleCreateInput.prototype, "color", void 0);
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
], VehicleCreateInput.prototype, "corporation", void 0);
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
], VehicleCreateInput.prototype, "numberOfSeats", void 0);
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
], VehicleCreateInput.prototype, "numberPlate", void 0);
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
], VehicleCreateInput.prototype, "ownerNationalId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => SeatCreateNestedManyWithoutVehiclesInput_1.SeatCreateNestedManyWithoutVehiclesInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => SeatCreateNestedManyWithoutVehiclesInput_1.SeatCreateNestedManyWithoutVehiclesInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => SeatCreateNestedManyWithoutVehiclesInput_1.SeatCreateNestedManyWithoutVehiclesInput, {
        nullable: true,
    }),
    __metadata("design:type", SeatCreateNestedManyWithoutVehiclesInput_1.SeatCreateNestedManyWithoutVehiclesInput)
], VehicleCreateInput.prototype, "seats", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TravelCreateNestedManyWithoutVehiclesInput_1.TravelCreateNestedManyWithoutVehiclesInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TravelCreateNestedManyWithoutVehiclesInput_1.TravelCreateNestedManyWithoutVehiclesInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TravelCreateNestedManyWithoutVehiclesInput_1.TravelCreateNestedManyWithoutVehiclesInput, {
        nullable: true,
    }),
    __metadata("design:type", TravelCreateNestedManyWithoutVehiclesInput_1.TravelCreateNestedManyWithoutVehiclesInput)
], VehicleCreateInput.prototype, "travelId", void 0);
VehicleCreateInput = __decorate([
    graphql_1.InputType()
], VehicleCreateInput);
exports.VehicleCreateInput = VehicleCreateInput;
//# sourceMappingURL=VehicleCreateInput.js.map