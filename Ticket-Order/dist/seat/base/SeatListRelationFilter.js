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
exports.SeatListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const SeatWhereInput_1 = require("./SeatWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let SeatListRelationFilter = class SeatListRelationFilter {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => SeatWhereInput_1.SeatWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => SeatWhereInput_1.SeatWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => SeatWhereInput_1.SeatWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", SeatWhereInput_1.SeatWhereInput)
], SeatListRelationFilter.prototype, "every", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => SeatWhereInput_1.SeatWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => SeatWhereInput_1.SeatWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => SeatWhereInput_1.SeatWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", SeatWhereInput_1.SeatWhereInput)
], SeatListRelationFilter.prototype, "some", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => SeatWhereInput_1.SeatWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => SeatWhereInput_1.SeatWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => SeatWhereInput_1.SeatWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", SeatWhereInput_1.SeatWhereInput)
], SeatListRelationFilter.prototype, "none", void 0);
SeatListRelationFilter = __decorate([
    graphql_1.InputType()
], SeatListRelationFilter);
exports.SeatListRelationFilter = SeatListRelationFilter;
//# sourceMappingURL=SeatListRelationFilter.js.map