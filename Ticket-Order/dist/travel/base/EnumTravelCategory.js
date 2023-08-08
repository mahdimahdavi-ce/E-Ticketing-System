"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTravelCategory = void 0;
const graphql_1 = require("@nestjs/graphql");
var EnumTravelCategory;
(function (EnumTravelCategory) {
    EnumTravelCategory["Bus"] = "Bus";
    EnumTravelCategory["Train"] = "Train";
    EnumTravelCategory["Airplane"] = "Airplane";
})(EnumTravelCategory = exports.EnumTravelCategory || (exports.EnumTravelCategory = {}));
graphql_1.registerEnumType(EnumTravelCategory, {
    name: "EnumTravelCategory",
});
//# sourceMappingURL=EnumTravelCategory.js.map