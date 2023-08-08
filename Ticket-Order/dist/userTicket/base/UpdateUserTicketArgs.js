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
exports.UpdateUserTicketArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const UserTicketWhereUniqueInput_1 = require("./UserTicketWhereUniqueInput");
const UserTicketUpdateInput_1 = require("./UserTicketUpdateInput");
let UpdateUserTicketArgs = class UpdateUserTicketArgs {
};
__decorate([
    graphql_1.Field(() => UserTicketWhereUniqueInput_1.UserTicketWhereUniqueInput, { nullable: false }),
    __metadata("design:type", UserTicketWhereUniqueInput_1.UserTicketWhereUniqueInput)
], UpdateUserTicketArgs.prototype, "where", void 0);
__decorate([
    graphql_1.Field(() => UserTicketUpdateInput_1.UserTicketUpdateInput, { nullable: false }),
    __metadata("design:type", UserTicketUpdateInput_1.UserTicketUpdateInput)
], UpdateUserTicketArgs.prototype, "data", void 0);
UpdateUserTicketArgs = __decorate([
    graphql_1.ArgsType()
], UpdateUserTicketArgs);
exports.UpdateUserTicketArgs = UpdateUserTicketArgs;
//# sourceMappingURL=UpdateUserTicketArgs.js.map