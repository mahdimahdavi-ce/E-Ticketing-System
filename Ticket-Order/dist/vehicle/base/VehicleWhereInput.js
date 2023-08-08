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
exports.VehicleWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const EnumVehicleCategory_1 = require("./EnumVehicleCategory");
const class_validator_1 = require("class-validator");
const StringNullableFilter_1 = require("../../util/StringNullableFilter");
const class_transformer_1 = require("class-transformer");
const StringFilter_1 = require("../../util/StringFilter");
const FloatNullableFilter_1 = require("../../util/FloatNullableFilter");
const SeatListRelationFilter_1 = require("../../seat/base/SeatListRelationFilter");
const TravelListRelationFilter_1 = require("../../travel/base/TravelListRelationFilter");
let VehicleWhereInput = class VehicleWhereInput {
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
    __metadata("design:type", String)
], VehicleWhereInput.prototype, "category", void 0);
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
], VehicleWhereInput.prototype, "color", void 0);
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
], VehicleWhereInput.prototype, "corporation", void 0);
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
], VehicleWhereInput.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: FloatNullableFilter_1.FloatNullableFilter,
    }),
    class_transformer_1.Type(() => FloatNullableFilter_1.FloatNullableFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], VehicleWhereInput.prototype, "numberOfSeats", void 0);
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
], VehicleWhereInput.prototype, "numberPlate", void 0);
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
], VehicleWhereInput.prototype, "ownerNationalId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => SeatListRelationFilter_1.SeatListRelationFilter,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => SeatListRelationFilter_1.SeatListRelationFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => SeatListRelationFilter_1.SeatListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", SeatListRelationFilter_1.SeatListRelationFilter)
], VehicleWhereInput.prototype, "seats", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TravelListRelationFilter_1.TravelListRelationFilter,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TravelListRelationFilter_1.TravelListRelationFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TravelListRelationFilter_1.TravelListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", TravelListRelationFilter_1.TravelListRelationFilter)
], VehicleWhereInput.prototype, "travelId", void 0);
VehicleWhereInput = __decorate([
    graphql_1.InputType()
], VehicleWhereInput);
exports.VehicleWhereInput = VehicleWhereInput;
//# sourceMappingURL=VehicleWhereInput.js.map