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
exports.DeleteTravelArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const TravelWhereUniqueInput_1 = require("./TravelWhereUniqueInput");
let DeleteTravelArgs = class DeleteTravelArgs {
};
__decorate([
    graphql_1.Field(() => TravelWhereUniqueInput_1.TravelWhereUniqueInput, { nullable: false }),
    __metadata("design:type", TravelWhereUniqueInput_1.TravelWhereUniqueInput)
], DeleteTravelArgs.prototype, "where", void 0);
DeleteTravelArgs = __decorate([
    graphql_1.ArgsType()
], DeleteTravelArgs);
exports.DeleteTravelArgs = DeleteTravelArgs;
//# sourceMappingURL=DeleteTravelArgs.js.map