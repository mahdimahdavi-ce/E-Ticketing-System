"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleModuleBase = void 0;
const common_1 = require("@nestjs/common");
const nest_morgan_1 = require("nest-morgan");
const acl_module_1 = require("../../auth/acl.module");
const auth_module_1 = require("../../auth/auth.module");
let VehicleModuleBase = class VehicleModuleBase {
};
VehicleModuleBase = __decorate([
    common_1.Module({
        imports: [acl_module_1.ACLModule, common_1.forwardRef(() => auth_module_1.AuthModule), nest_morgan_1.MorganModule],
        exports: [acl_module_1.ACLModule, auth_module_1.AuthModule, nest_morgan_1.MorganModule],
    })
], VehicleModuleBase);
exports.VehicleModuleBase = VehicleModuleBase;
//# sourceMappingURL=vehicle.module.base.js.map