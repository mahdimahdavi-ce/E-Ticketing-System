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
exports.UpdateVehicleArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const VehicleWhereUniqueInput_1 = require("./VehicleWhereUniqueInput");
const VehicleUpdateInput_1 = require("./VehicleUpdateInput");
let UpdateVehicleArgs = class UpdateVehicleArgs {
};
__decorate([
    graphql_1.Field(() => VehicleWhereUniqueInput_1.VehicleWhereUniqueInput, { nullable: false }),
    __metadata("design:type", VehicleWhereUniqueInput_1.VehicleWhereUniqueInput)
], UpdateVehicleArgs.prototype, "where", void 0);
__decorate([
    graphql_1.Field(() => VehicleUpdateInput_1.VehicleUpdateInput, { nullable: false }),
    __metadata("design:type", VehicleUpdateInput_1.VehicleUpdateInput)
], UpdateVehicleArgs.prototype, "data", void 0);
UpdateVehicleArgs = __decorate([
    graphql_1.ArgsType()
], UpdateVehicleArgs);
exports.UpdateVehicleArgs = UpdateVehicleArgs;
//# sourceMappingURL=UpdateVehicleArgs.js.map