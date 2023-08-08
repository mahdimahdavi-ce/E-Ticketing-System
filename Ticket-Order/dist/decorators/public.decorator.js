"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_PUBLIC_KEY = "isPublic";
const PublicAuthMiddleware = common_1.SetMetadata(exports.IS_PUBLIC_KEY, true);
const PublicAuthSwagger = common_1.SetMetadata("swagger/apiSecurity", ["isPublic"]);
const Public = () => common_1.applyDecorators(PublicAuthMiddleware, PublicAuthSwagger);
exports.Public = Public;
//# sourceMappingURL=public.decorator.js.map