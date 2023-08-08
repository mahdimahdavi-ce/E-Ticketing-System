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
exports.TicketOrderByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const SortOrder_1 = require("../../util/SortOrder");
let TicketOrderByInput = class TicketOrderByInput {
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
], TicketOrderByInput.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "gender", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "nationalId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "seatNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "travelIdId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "updatedAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "userIdId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    }),
    graphql_1.Field(() => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", String)
], TicketOrderByInput.prototype, "vehicleId", void 0);
TicketOrderByInput = __decorate([
    graphql_1.InputType({
        isAbstract: true,
        description: undefined,
    })
], TicketOrderByInput);
exports.TicketOrderByInput = TicketOrderByInput;
//# sourceMappingURL=TicketOrderByInput.js.map