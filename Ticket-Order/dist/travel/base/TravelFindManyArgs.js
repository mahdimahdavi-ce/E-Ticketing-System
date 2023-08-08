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
exports.TravelFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const TravelWhereInput_1 = require("./TravelWhereInput");
const class_transformer_1 = require("class-transformer");
const TravelOrderByInput_1 = require("./TravelOrderByInput");
let TravelFindManyArgs = class TravelFindManyArgs {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TravelWhereInput_1.TravelWhereInput,
    }),
    graphql_1.Field(() => TravelWhereInput_1.TravelWhereInput, { nullable: true }),
    class_transformer_1.Type(() => TravelWhereInput_1.TravelWhereInput),
    __metadata("design:type", TravelWhereInput_1.TravelWhereInput)
], TravelFindManyArgs.prototype, "where", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: [TravelOrderByInput_1.TravelOrderByInput],
    }),
    graphql_1.Field(() => [TravelOrderByInput_1.TravelOrderByInput], { nullable: true }),
    class_transformer_1.Type(() => TravelOrderByInput_1.TravelOrderByInput),
    __metadata("design:type", Array)
], TravelFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], TravelFindManyArgs.prototype, "skip", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], TravelFindManyArgs.prototype, "take", void 0);
TravelFindManyArgs = __decorate([
    graphql_1.ArgsType()
], TravelFindManyArgs);
exports.TravelFindManyArgs = TravelFindManyArgs;
//# sourceMappingURL=TravelFindManyArgs.js.map