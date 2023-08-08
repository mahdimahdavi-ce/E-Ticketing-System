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
exports.DeleteSeatArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const SeatWhereUniqueInput_1 = require("./SeatWhereUniqueInput");
let DeleteSeatArgs = class DeleteSeatArgs {
};
__decorate([
    graphql_1.Field(() => SeatWhereUniqueInput_1.SeatWhereUniqueInput, { nullable: false }),
    __metadata("design:type", SeatWhereUniqueInput_1.SeatWhereUniqueInput)
], DeleteSeatArgs.prototype, "where", void 0);
DeleteSeatArgs = __decorate([
    graphql_1.ArgsType()
], DeleteSeatArgs);
exports.DeleteSeatArgs = DeleteSeatArgs;
//# sourceMappingURL=DeleteSeatArgs.js.map