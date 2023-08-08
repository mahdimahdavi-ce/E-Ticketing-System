"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelModule = void 0;
const common_1 = require("@nestjs/common");
const travel_module_base_1 = require("./base/travel.module.base");
const travel_service_1 = require("./travel.service");
const travel_controller_1 = require("./travel.controller");
const travel_resolver_1 = require("./travel.resolver");
let TravelModule = class TravelModule {
};
TravelModule = __decorate([
    common_1.Module({
        imports: [travel_module_base_1.TravelModuleBase],
        controllers: [travel_controller_1.TravelController],
        providers: [travel_service_1.TravelService, travel_resolver_1.TravelResolver],
        exports: [travel_service_1.TravelService],
    })
], TravelModule);
exports.TravelModule = TravelModule;
//# sourceMappingURL=travel.module.js.map