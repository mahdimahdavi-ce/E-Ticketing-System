"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleModule = void 0;
const common_1 = require("@nestjs/common");
const vehicle_module_base_1 = require("./base/vehicle.module.base");
const vehicle_service_1 = require("./vehicle.service");
const vehicle_controller_1 = require("./vehicle.controller");
const vehicle_resolver_1 = require("./vehicle.resolver");
let VehicleModule = class VehicleModule {
};
VehicleModule = __decorate([
    common_1.Module({
        imports: [vehicle_module_base_1.VehicleModuleBase],
        controllers: [vehicle_controller_1.VehicleController],
        providers: [vehicle_service_1.VehicleService, vehicle_resolver_1.VehicleResolver],
        exports: [vehicle_service_1.VehicleService],
    })
], VehicleModule);
exports.VehicleModule = VehicleModule;
//# sourceMappingURL=vehicle.module.js.map