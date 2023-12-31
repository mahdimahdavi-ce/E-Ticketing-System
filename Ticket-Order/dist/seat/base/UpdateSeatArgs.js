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
exports.UpdateSeatArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const SeatWhereUniqueInput_1 = require("./SeatWhereUniqueInput");
const SeatUpdateInput_1 = require("./SeatUpdateInput");
let UpdateSeatArgs = class UpdateSeatArgs {
};
__decorate([
    graphql_1.Field(() => SeatWhereUniqueInput_1.SeatWhereUniqueInput, { nullable: false }),
    __metadata("design:type", SeatWhereUniqueInput_1.SeatWhereUniqueInput)
], UpdateSeatArgs.prototype, "where", void 0);
__decorate([
    graphql_1.Field(() => SeatUpdateInput_1.SeatUpdateInput, { nullable: false }),
    __metadata("design:type", SeatUpdateInput_1.SeatUpdateInput)
], UpdateSeatArgs.prototype, "data", void 0);
UpdateSeatArgs = __decorate([
    graphql_1.ArgsType()
], UpdateSeatArgs);
exports.UpdateSeatArgs = UpdateSeatArgs;
//# sourceMappingURL=UpdateSeatArgs.js.map