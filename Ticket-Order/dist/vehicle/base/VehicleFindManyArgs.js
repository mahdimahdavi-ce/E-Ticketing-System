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
exports.VehicleFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const VehicleWhereInput_1 = require("./VehicleWhereInput");
const class_transformer_1 = require("class-transformer");
const VehicleOrderByInput_1 = require("./VehicleOrderByInput");
let VehicleFindManyArgs = class VehicleFindManyArgs {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => VehicleWhereInput_1.VehicleWhereInput,
    }),
    graphql_1.Field(() => VehicleWhereInput_1.VehicleWhereInput, { nullable: true }),
    class_transformer_1.Type(() => VehicleWhereInput_1.VehicleWhereInput),
    __metadata("design:type", VehicleWhereInput_1.VehicleWhereInput)
], VehicleFindManyArgs.prototype, "where", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: [VehicleOrderByInput_1.VehicleOrderByInput],
    }),
    graphql_1.Field(() => [VehicleOrderByInput_1.VehicleOrderByInput], { nullable: true }),
    class_transformer_1.Type(() => VehicleOrderByInput_1.VehicleOrderByInput),
    __metadata("design:type", Array)
], VehicleFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], VehicleFindManyArgs.prototype, "skip", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], VehicleFindManyArgs.prototype, "take", void 0);
VehicleFindManyArgs = __decorate([
    graphql_1.ArgsType()
], VehicleFindManyArgs);
exports.VehicleFindManyArgs = VehicleFindManyArgs;
//# sourceMappingURL=VehicleFindManyArgs.js.map