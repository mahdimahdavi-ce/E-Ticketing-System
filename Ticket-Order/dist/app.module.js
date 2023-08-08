"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const nest_morgan_1 = require("nest-morgan");
const user_module_1 = require("./user/user.module");
const ticket_module_1 = require("./ticket/ticket.module");
const travel_module_1 = require("./travel/travel.module");
const vehicle_module_1 = require("./vehicle/vehicle.module");
const userTicket_module_1 = require("./userTicket/userTicket.module");
const seat_module_1 = require("./seat/seat.module");
const prisma_module_1 = require("./prisma/prisma.module");
const secretsManager_module_1 = require("./providers/secrets/secretsManager.module");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const serveStaticOptions_service_1 = require("./serveStaticOptions.service");
const graphql_1 = require("@nestjs/graphql");
const acl_module_1 = require("./auth/acl.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        controllers: [],
        imports: [
            acl_module_1.ACLModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            ticket_module_1.TicketModule,
            travel_module_1.TravelModule,
            vehicle_module_1.VehicleModule,
            userTicket_module_1.UserTicketModule,
            seat_module_1.SeatModule,
            prisma_module_1.PrismaModule,
            secretsManager_module_1.SecretsManagerModule,
            nest_morgan_1.MorganModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            serve_static_1.ServeStaticModule.forRootAsync({
                useClass: serveStaticOptions_service_1.ServeStaticOptionsService,
            }),
            graphql_1.GraphQLModule.forRootAsync({
                useFactory: (configService) => {
                    const playground = configService.get("GRAPHQL_PLAYGROUND");
                    const introspection = configService.get("GRAPHQL_INTROSPECTION");
                    return {
                        autoSchemaFile: "schema.graphql",
                        sortSchema: true,
                        playground,
                        introspection: playground || introspection,
                    };
                },
                inject: [config_1.ConfigService],
                imports: [config_1.ConfigModule],
            }),
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                scope: common_1.Scope.REQUEST,
                useClass: nest_morgan_1.MorganInterceptor("combined"),
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map