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
exports.UserTicketWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const StringFilter_1 = require("../../util/StringFilter");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const BooleanNullableFilter_1 = require("../../util/BooleanNullableFilter");
const TicketWhereUniqueInput_1 = require("../../ticket/base/TicketWhereUniqueInput");
const StringNullableFilter_1 = require("../../util/StringNullableFilter");
let UserTicketWhereInput = class UserTicketWhereInput {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    class_transformer_1.Type(() => StringFilter_1.StringFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserTicketWhereInput.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: BooleanNullableFilter_1.BooleanNullableFilter,
    }),
    class_transformer_1.Type(() => BooleanNullableFilter_1.BooleanNullableFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => BooleanNullableFilter_1.BooleanNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", BooleanNullableFilter_1.BooleanNullableFilter)
], UserTicketWhereInput.prototype, "isCanceled", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TicketWhereUniqueInput_1.TicketWhereUniqueInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TicketWhereUniqueInput_1.TicketWhereUniqueInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TicketWhereUniqueInput_1.TicketWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", TicketWhereUniqueInput_1.TicketWhereUniqueInput)
], UserTicketWhereInput.prototype, "ticketId", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    class_transformer_1.Type(() => StringNullableFilter_1.StringNullableFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserTicketWhereInput.prototype, "userId", void 0);
UserTicketWhereInput = __decorate([
    graphql_1.InputType()
], UserTicketWhereInput);
exports.UserTicketWhereInput = UserTicketWhereInput;
//# sourceMappingURL=UserTicketWhereInput.js.map