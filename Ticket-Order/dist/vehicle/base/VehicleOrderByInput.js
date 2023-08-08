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
exports.VehicleOrderByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const SortOrder_1 = require("../../util/SortOrder");
let VehicleOrderByInput = class VehicleOrderByInput {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], VehicleOrderByInput.prototype, "category", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], VehicleOrderByInput.prototype, "color", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], VehicleOrderByInput.prototype, "corporation", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], VehicleOrderByInput.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], VehicleOrderByInput.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], VehicleOrderByInput.prototype, "numberOfSeats", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], VehicleOrderByInput.prototype, "numberPlate", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], VehicleOrderByInput.prototype, "ownerNationalId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], VehicleOrderByInput.prototype, "updatedAt", void 0);
VehicleOrderByInput = __decorate([
    graphql_1.InputType({
        isAbstract: true,
        description: undefined,
    })
], VehicleOrderByInput);
exports.VehicleOrderByInput = VehicleOrderByInput;
//# sourceMappingURL=VehicleOrderByInput.js.map