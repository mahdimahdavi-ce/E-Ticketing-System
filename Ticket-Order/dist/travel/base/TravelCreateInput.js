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
exports.TravelCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const EnumTravelCategory_1 = require("./EnumTravelCategory");
const class_transformer_1 = require("class-transformer");
const TicketCreateNestedManyWithoutTravelsInput_1 = require("./TicketCreateNestedManyWithoutTravelsInput");
const VehicleWhereUniqueInput_1 = require("../../vehicle/base/VehicleWhereUniqueInput");
let TravelCreateInput = class TravelCreateInput {
};
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: Number,
    }),
    class_validator_1.IsNumber(),
    graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], TravelCreateInput.prototype, "basePrice", void 0);
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
], TravelCreateInput.prototype, "category", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsDate(),
    class_transformer_1.Type(() => Date),
    graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], TravelCreateInput.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], TravelCreateInput.prototype, "destination", void 0);
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
], TravelCreateInput.prototype, "discount", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
    }),
    class_validator_1.IsString(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], TravelCreateInput.prototype, "source", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TicketCreateNestedManyWithoutTravelsInput_1.TicketCreateNestedManyWithoutTravelsInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TicketCreateNestedManyWithoutTravelsInput_1.TicketCreateNestedManyWithoutTravelsInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TicketCreateNestedManyWithoutTravelsInput_1.TicketCreateNestedManyWithoutTravelsInput, {
        nullable: true,
    }),
    __metadata("design:type", TicketCreateNestedManyWithoutTravelsInput_1.TicketCreateNestedManyWithoutTravelsInput)
], TravelCreateInput.prototype, "ticketId", void 0);
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
], TravelCreateInput.prototype, "vehicleId", void 0);
TravelCreateInput = __decorate([
    graphql_1.InputType()
], TravelCreateInput);
exports.TravelCreateInput = TravelCreateInput;
//# sourceMappingURL=TravelCreateInput.js.map