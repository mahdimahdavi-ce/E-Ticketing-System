"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTicketGender = void 0;
const graphql_1 = require("@nestjs/graphql");
var EnumTicketGender;
(function (EnumTicketGender) {
    EnumTicketGender["Male"] = "Male";
    EnumTicketGender["Female"] = "Female";
})(EnumTicketGender = exports.EnumTicketGender || (exports.EnumTicketGender = {}));
graphql_1.registerEnumType(EnumTicketGender, {
    name: "EnumTicketGender",
});
//# sourceMappingURL=EnumTicketGender.js.map