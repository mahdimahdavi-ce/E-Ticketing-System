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
exports.UpdateTicketArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const TicketWhereUniqueInput_1 = require("./TicketWhereUniqueInput");
const TicketUpdateInput_1 = require("./TicketUpdateInput");
let UpdateTicketArgs = class UpdateTicketArgs {
};
__decorate([
    graphql_1.Field(() => TicketWhereUniqueInput_1.TicketWhereUniqueInput, { nullable: false }),
    __metadata("design:type", TicketWhereUniqueInput_1.TicketWhereUniqueInput)
], UpdateTicketArgs.prototype, "where", void 0);
__decorate([
    graphql_1.Field(() => TicketUpdateInput_1.TicketUpdateInput, { nullable: false }),
    __metadata("design:type", TicketUpdateInput_1.TicketUpdateInput)
], UpdateTicketArgs.prototype, "data", void 0);
UpdateTicketArgs = __decorate([
    graphql_1.ArgsType()
], UpdateTicketArgs);
exports.UpdateTicketArgs = UpdateTicketArgs;
//# sourceMappingURL=UpdateTicketArgs.js.map