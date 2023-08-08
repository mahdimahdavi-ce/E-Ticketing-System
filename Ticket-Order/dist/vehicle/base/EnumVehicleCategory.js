"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumVehicleCategory = void 0;
const graphql_1 = require("@nestjs/graphql");
var EnumVehicleCategory;
(function (EnumVehicleCategory) {
    EnumVehicleCategory["Bus"] = "Bus";
    EnumVehicleCategory["Train"] = "Train";
    EnumVehicleCategory["Airplaine"] = "Airplaine";
})(EnumVehicleCategory = exports.EnumVehicleCategory || (exports.EnumVehicleCategory = {}));
graphql_1.registerEnumType(EnumVehicleCategory, {
    name: "EnumVehicleCategory",
});
//# sourceMappingURL=EnumVehicleCategory.js.map