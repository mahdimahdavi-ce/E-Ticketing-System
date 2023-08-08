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
exports.TicketListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const TicketWhereInput_1 = require("./TicketWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let TicketListRelationFilter = class TicketListRelationFilter {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TicketWhereInput_1.TicketWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TicketWhereInput_1.TicketWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TicketWhereInput_1.TicketWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", TicketWhereInput_1.TicketWhereInput)
], TicketListRelationFilter.prototype, "every", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TicketWhereInput_1.TicketWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TicketWhereInput_1.TicketWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TicketWhereInput_1.TicketWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", TicketWhereInput_1.TicketWhereInput)
], TicketListRelationFilter.prototype, "some", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TicketWhereInput_1.TicketWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TicketWhereInput_1.TicketWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TicketWhereInput_1.TicketWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", TicketWhereInput_1.TicketWhereInput)
], TicketListRelationFilter.prototype, "none", void 0);
TicketListRelationFilter = __decorate([
    graphql_1.InputType()
], TicketListRelationFilter);
exports.TicketListRelationFilter = TicketListRelationFilter;
//# sourceMappingURL=TicketListRelationFilter.js.map