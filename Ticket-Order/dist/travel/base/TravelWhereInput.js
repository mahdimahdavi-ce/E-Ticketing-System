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
exports.TravelWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const FloatFilter_1 = require("../../util/FloatFilter");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const EnumTravelCategory_1 = require("./EnumTravelCategory");
const DateTimeFilter_1 = require("../../util/DateTimeFilter");
const StringFilter_1 = require("../../util/StringFilter");
const StringNullableFilter_1 = require("../../util/StringNullableFilter");
const TicketListRelationFilter_1 = require("../../ticket/base/TicketListRelationFilter");
const VehicleWhereUniqueInput_1 = require("../../vehicle/base/VehicleWhereUniqueInput");
let TravelWhereInput = class TravelWhereInput {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: FloatFilter_1.FloatFilter,
    }),
    class_transformer_1.Type(() => FloatFilter_1.FloatFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => FloatFilter_1.FloatFilter, {
        nullable: true,
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], TravelWhereInput.prototype, "basePrice", void 0);
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
    __metadata("design:type", String)
], TravelWhereInput.prototype, "category", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: DateTimeFilter_1.DateTimeFilter,
    }),
    class_transformer_1.Type(() => DateTimeFilter_1.DateTimeFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TravelWhereInput.prototype, "date", void 0);
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
], TravelWhereInput.prototype, "destination", void 0);
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
], TravelWhereInput.prototype, "discount", void 0);
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
], TravelWhereInput.prototype, "id", void 0);
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
], TravelWhereInput.prototype, "source", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TicketListRelationFilter_1.TicketListRelationFilter,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TicketListRelationFilter_1.TicketListRelationFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TicketListRelationFilter_1.TicketListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", TicketListRelationFilter_1.TicketListRelationFilter)
], TravelWhereInput.prototype, "ticketId", void 0);
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
], TravelWhereInput.prototype, "vehicleId", void 0);
TravelWhereInput = __decorate([
    graphql_1.InputType()
], TravelWhereInput);
exports.TravelWhereInput = TravelWhereInput;
//# sourceMappingURL=TravelWhereInput.js.map