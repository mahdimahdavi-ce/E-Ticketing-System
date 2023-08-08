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
exports.SeatWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const StringFilter_1 = require("../../util/StringFilter");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const BooleanNullableFilter_1 = require("../../util/BooleanNullableFilter");
const FloatNullableFilter_1 = require("../../util/FloatNullableFilter");
const VehicleWhereUniqueInput_1 = require("../../vehicle/base/VehicleWhereUniqueInput");
let SeatWhereInput = class SeatWhereInput {
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
], SeatWhereInput.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: BooleanNullableFilter_1.BooleanNullableFilter,
    }),
    class_transformer_1.Type(() => BooleanNullableFilter_1.BooleanNullableFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => BooleanNullableFilter_1.BooleanNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", BooleanNullableFilter_1.BooleanNullableFilter)
], SeatWhereInput.prototype, "isReserved", void 0);
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
], SeatWhereInput.prototype, "seatNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => VehicleWhereUniqueInput_1.VehicleWhereUniqueInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => VehicleWhereUniqueInput_1.VehicleWhereUniqueInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => VehicleWhereUniqueInput_1.VehicleWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", VehicleWhereUniqueInput_1.VehicleWhereUniqueInput)
], SeatWhereInput.prototype, "vehicleId", void 0);
SeatWhereInput = __decorate([
    graphql_1.InputType()
], SeatWhereInput);
exports.SeatWhereInput = SeatWhereInput;
//# sourceMappingURL=SeatWhereInput.js.map