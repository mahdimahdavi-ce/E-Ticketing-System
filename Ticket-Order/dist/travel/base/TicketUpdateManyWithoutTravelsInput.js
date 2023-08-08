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
exports.TicketUpdateManyWithoutTravelsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const TicketWhereUniqueInput_1 = require("../../ticket/base/TicketWhereUniqueInput");
const swagger_1 = require("@nestjs/swagger");
let TicketUpdateManyWithoutTravelsInput = class TicketUpdateManyWithoutTravelsInput {
};
__decorate([
    graphql_1.Field(() => [TicketWhereUniqueInput_1.TicketWhereUniqueInput], {
        nullable: true,
    }),
    swagger_1.ApiProperty({
        required: false,
        type: () => [TicketWhereUniqueInput_1.TicketWhereUniqueInput],
    }),
    __metadata("design:type", Array)
], TicketUpdateManyWithoutTravelsInput.prototype, "connect", void 0);
__decorate([
    graphql_1.Field(() => [TicketWhereUniqueInput_1.TicketWhereUniqueInput], {
        nullable: true,
    }),
    swagger_1.ApiProperty({
        required: false,
        type: () => [TicketWhereUniqueInput_1.TicketWhereUniqueInput],
    }),
    __metadata("design:type", Array)
], TicketUpdateManyWithoutTravelsInput.prototype, "disconnect", void 0);
__decorate([
    graphql_1.Field(() => [TicketWhereUniqueInput_1.TicketWhereUniqueInput], {
        nullable: true,
    }),
    swagger_1.ApiProperty({
        required: false,
        type: () => [TicketWhereUniqueInput_1.TicketWhereUniqueInput],
    }),
    __metadata("design:type", Array)
], TicketUpdateManyWithoutTravelsInput.prototype, "set", void 0);
TicketUpdateManyWithoutTravelsInput = __decorate([
    graphql_1.InputType()
], TicketUpdateManyWithoutTravelsInput);
exports.TicketUpdateManyWithoutTravelsInput = TicketUpdateManyWithoutTravelsInput;
//# sourceMappingURL=TicketUpdateManyWithoutTravelsInput.js.map