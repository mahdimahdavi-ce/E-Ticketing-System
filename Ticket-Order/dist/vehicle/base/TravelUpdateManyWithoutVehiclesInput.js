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
exports.TravelUpdateManyWithoutVehiclesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const TravelWhereUniqueInput_1 = require("../../travel/base/TravelWhereUniqueInput");
const swagger_1 = require("@nestjs/swagger");
let TravelUpdateManyWithoutVehiclesInput = class TravelUpdateManyWithoutVehiclesInput {
};
__decorate([
    graphql_1.Field(() => [TravelWhereUniqueInput_1.TravelWhereUniqueInput], {
        nullable: true,
    }),
    swagger_1.ApiProperty({
        required: false,
        type: () => [TravelWhereUniqueInput_1.TravelWhereUniqueInput],
    }),
    __metadata("design:type", Array)
], TravelUpdateManyWithoutVehiclesInput.prototype, "connect", void 0);
__decorate([
    graphql_1.Field(() => [TravelWhereUniqueInput_1.TravelWhereUniqueInput], {
        nullable: true,
    }),
    swagger_1.ApiProperty({
        required: false,
        type: () => [TravelWhereUniqueInput_1.TravelWhereUniqueInput],
    }),
    __metadata("design:type", Array)
], TravelUpdateManyWithoutVehiclesInput.prototype, "disconnect", void 0);
__decorate([
    graphql_1.Field(() => [TravelWhereUniqueInput_1.TravelWhereUniqueInput], {
        nullable: true,
    }),
    swagger_1.ApiProperty({
        required: false,
        type: () => [TravelWhereUniqueInput_1.TravelWhereUniqueInput],
    }),
    __metadata("design:type", Array)
], TravelUpdateManyWithoutVehiclesInput.prototype, "set", void 0);
TravelUpdateManyWithoutVehiclesInput = __decorate([
    graphql_1.InputType()
], TravelUpdateManyWithoutVehiclesInput);
exports.TravelUpdateManyWithoutVehiclesInput = TravelUpdateManyWithoutVehiclesInput;
//# sourceMappingURL=TravelUpdateManyWithoutVehiclesInput.js.map