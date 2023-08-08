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
exports.TravelListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const TravelWhereInput_1 = require("./TravelWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let TravelListRelationFilter = class TravelListRelationFilter {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TravelWhereInput_1.TravelWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TravelWhereInput_1.TravelWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TravelWhereInput_1.TravelWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", TravelWhereInput_1.TravelWhereInput)
], TravelListRelationFilter.prototype, "every", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TravelWhereInput_1.TravelWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TravelWhereInput_1.TravelWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TravelWhereInput_1.TravelWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", TravelWhereInput_1.TravelWhereInput)
], TravelListRelationFilter.prototype, "some", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TravelWhereInput_1.TravelWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TravelWhereInput_1.TravelWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TravelWhereInput_1.TravelWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", TravelWhereInput_1.TravelWhereInput)
], TravelListRelationFilter.prototype, "none", void 0);
TravelListRelationFilter = __decorate([
    graphql_1.InputType()
], TravelListRelationFilter);
exports.TravelListRelationFilter = TravelListRelationFilter;
//# sourceMappingURL=TravelListRelationFilter.js.map