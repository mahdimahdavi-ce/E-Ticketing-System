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
exports.UserTicketFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const UserTicketWhereInput_1 = require("./UserTicketWhereInput");
const class_transformer_1 = require("class-transformer");
const UserTicketOrderByInput_1 = require("./UserTicketOrderByInput");
let UserTicketFindManyArgs = class UserTicketFindManyArgs {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => UserTicketWhereInput_1.UserTicketWhereInput,
    }),
    graphql_1.Field(() => UserTicketWhereInput_1.UserTicketWhereInput, { nullable: true }),
    class_transformer_1.Type(() => UserTicketWhereInput_1.UserTicketWhereInput),
    __metadata("design:type", UserTicketWhereInput_1.UserTicketWhereInput)
], UserTicketFindManyArgs.prototype, "where", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: [UserTicketOrderByInput_1.UserTicketOrderByInput],
    }),
    graphql_1.Field(() => [UserTicketOrderByInput_1.UserTicketOrderByInput], { nullable: true }),
    class_transformer_1.Type(() => UserTicketOrderByInput_1.UserTicketOrderByInput),
    __metadata("design:type", Array)
], UserTicketFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], UserTicketFindManyArgs.prototype, "skip", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], UserTicketFindManyArgs.prototype, "take", void 0);
UserTicketFindManyArgs = __decorate([
    graphql_1.ArgsType()
], UserTicketFindManyArgs);
exports.UserTicketFindManyArgs = UserTicketFindManyArgs;
//# sourceMappingURL=UserTicketFindManyArgs.js.map