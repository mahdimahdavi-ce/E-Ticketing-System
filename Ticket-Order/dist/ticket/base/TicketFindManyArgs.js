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
exports.TicketFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const TicketWhereInput_1 = require("./TicketWhereInput");
const class_transformer_1 = require("class-transformer");
const TicketOrderByInput_1 = require("./TicketOrderByInput");
let TicketFindManyArgs = class TicketFindManyArgs {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TicketWhereInput_1.TicketWhereInput,
    }),
    graphql_1.Field(() => TicketWhereInput_1.TicketWhereInput, { nullable: true }),
    class_transformer_1.Type(() => TicketWhereInput_1.TicketWhereInput),
    __metadata("design:type", TicketWhereInput_1.TicketWhereInput)
], TicketFindManyArgs.prototype, "where", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: [TicketOrderByInput_1.TicketOrderByInput],
    }),
    graphql_1.Field(() => [TicketOrderByInput_1.TicketOrderByInput], { nullable: true }),
    class_transformer_1.Type(() => TicketOrderByInput_1.TicketOrderByInput),
    __metadata("design:type", Array)
], TicketFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], TicketFindManyArgs.prototype, "skip", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], TicketFindManyArgs.prototype, "take", void 0);
TicketFindManyArgs = __decorate([
    graphql_1.ArgsType()
], TicketFindManyArgs);
exports.TicketFindManyArgs = TicketFindManyArgs;
//# sourceMappingURL=TicketFindManyArgs.js.map