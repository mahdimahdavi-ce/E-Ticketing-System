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
exports.TravelUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const EnumTravelCategory_1 = require("./EnumTravelCategory");
const class_transformer_1 = require("class-transformer");
const TicketUpdateManyWithoutTravelsInput_1 = require("./TicketUpdateManyWithoutTravelsInput");
const VehicleWhereUniqueInput_1 = require("../../vehicle/base/VehicleWhereUniqueInput");
let TravelUpdateInput = class TravelUpdateInput {
};
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
    __metadata("design:type", Number)
], TravelUpdateInput.prototype, "basePrice", void 0);
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
], TravelUpdateInput.prototype, "category", void 0);
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
    __metadata("design:type", Date)
], TravelUpdateInput.prototype, "date", void 0);
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
    __metadata("design:type", String)
], TravelUpdateInput.prototype, "destination", void 0);
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
], TravelUpdateInput.prototype, "discount", void 0);
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
    __metadata("design:type", String)
], TravelUpdateInput.prototype, "source", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TicketUpdateManyWithoutTravelsInput_1.TicketUpdateManyWithoutTravelsInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TicketUpdateManyWithoutTravelsInput_1.TicketUpdateManyWithoutTravelsInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TicketUpdateManyWithoutTravelsInput_1.TicketUpdateManyWithoutTravelsInput, {
        nullable: true,
    }),
    __metadata("design:type", TicketUpdateManyWithoutTravelsInput_1.TicketUpdateManyWithoutTravelsInput)
], TravelUpdateInput.prototype, "ticketId", void 0);
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
    __metadata("design:type", Object)
], TravelUpdateInput.prototype, "vehicleId", void 0);
TravelUpdateInput = __decorate([
    graphql_1.InputType()
], TravelUpdateInput);
exports.TravelUpdateInput = TravelUpdateInput;
//# sourceMappingURL=TravelUpdateInput.js.map