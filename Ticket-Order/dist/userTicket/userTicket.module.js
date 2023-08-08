"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTicketModule = void 0;
const common_1 = require("@nestjs/common");
const userTicket_module_base_1 = require("./base/userTicket.module.base");
const userTicket_service_1 = require("./userTicket.service");
const userTicket_controller_1 = require("./userTicket.controller");
const userTicket_resolver_1 = require("./userTicket.resolver");
let UserTicketModule = class UserTicketModule {
};
UserTicketModule = __decorate([
    common_1.Module({
        imports: [userTicket_module_base_1.UserTicketModuleBase],
        controllers: [userTicket_controller_1.UserTicketController],
        providers: [userTicket_service_1.UserTicketService, userTicket_resolver_1.UserTicketResolver],
        exports: [userTicket_service_1.UserTicketService],
    })
], UserTicketModule);
exports.UserTicketModule = UserTicketModule;
//# sourceMappingURL=userTicket.module.js.map