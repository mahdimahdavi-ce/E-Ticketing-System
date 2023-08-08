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
exports.SeatFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const SeatWhereInput_1 = require("./SeatWhereInput");
const class_transformer_1 = require("class-transformer");
const SeatOrderByInput_1 = require("./SeatOrderByInput");
let SeatFindManyArgs = class SeatFindManyArgs {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => SeatWhereInput_1.SeatWhereInput,
    }),
    graphql_1.Field(() => SeatWhereInput_1.SeatWhereInput, { nullable: true }),
    class_transformer_1.Type(() => SeatWhereInput_1.SeatWhereInput),
    __metadata("design:type", SeatWhereInput_1.SeatWhereInput)
], SeatFindManyArgs.prototype, "where", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: [SeatOrderByInput_1.SeatOrderByInput],
    }),
    graphql_1.Field(() => [SeatOrderByInput_1.SeatOrderByInput], { nullable: true }),
    class_transformer_1.Type(() => SeatOrderByInput_1.SeatOrderByInput),
    __metadata("design:type", Array)
], SeatFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], SeatFindManyArgs.prototype, "skip", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], SeatFindManyArgs.prototype, "take", void 0);
SeatFindManyArgs = __decorate([
    graphql_1.ArgsType()
], SeatFindManyArgs);
exports.SeatFindManyArgs = SeatFindManyArgs;
//# sourceMappingURL=SeatFindManyArgs.js.map