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
exports.UserTicketListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const UserTicketWhereInput_1 = require("./UserTicketWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let UserTicketListRelationFilter = class UserTicketListRelationFilter {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => UserTicketWhereInput_1.UserTicketWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => UserTicketWhereInput_1.UserTicketWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => UserTicketWhereInput_1.UserTicketWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", UserTicketWhereInput_1.UserTicketWhereInput)
], UserTicketListRelationFilter.prototype, "every", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => UserTicketWhereInput_1.UserTicketWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => UserTicketWhereInput_1.UserTicketWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => UserTicketWhereInput_1.UserTicketWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", UserTicketWhereInput_1.UserTicketWhereInput)
], UserTicketListRelationFilter.prototype, "some", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => UserTicketWhereInput_1.UserTicketWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => UserTicketWhereInput_1.UserTicketWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => UserTicketWhereInput_1.UserTicketWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", UserTicketWhereInput_1.UserTicketWhereInput)
], UserTicketListRelationFilter.prototype, "none", void 0);
UserTicketListRelationFilter = __decorate([
    graphql_1.InputType()
], UserTicketListRelationFilter);
exports.UserTicketListRelationFilter = UserTicketListRelationFilter;
//# sourceMappingURL=UserTicketListRelationFilter.js.map