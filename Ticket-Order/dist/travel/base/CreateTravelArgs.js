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
exports.CreateTravelArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const TravelCreateInput_1 = require("./TravelCreateInput");
let CreateTravelArgs = class CreateTravelArgs {
};
__decorate([
    graphql_1.Field(() => TravelCreateInput_1.TravelCreateInput, { nullable: false }),
    __metadata("design:type", TravelCreateInput_1.TravelCreateInput)
], CreateTravelArgs.prototype, "data", void 0);
CreateTravelArgs = __decorate([
    graphql_1.ArgsType()
], CreateTravelArgs);
exports.CreateTravelArgs = CreateTravelArgs;
//# sourceMappingURL=CreateTravelArgs.js.map