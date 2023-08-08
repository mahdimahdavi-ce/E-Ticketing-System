"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiNestedQuery = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
require("reflect-metadata");
const generateApiQueryObject = (prop, propType, required, isArray) => {
    if (propType === Number) {
        return {
            required,
            name: prop,
            style: "deepObject",
            explode: true,
            type: "number",
            isArray,
        };
    }
    else if (propType === String) {
        return {
            required,
            name: prop,
            style: "deepObject",
            explode: true,
            type: "string",
            isArray,
        };
    }
    else {
        return {
            required,
            name: prop,
            style: "deepObject",
            explode: true,
            type: "object",
            isArray,
            schema: {
                $ref: swagger_1.getSchemaPath(propType),
            },
        };
    }
};
function ApiNestedQuery(query) {
    const constructor = query.prototype;
    const properties = Reflect.getMetadata("swagger/apiModelPropertiesArray", constructor).map((prop) => prop.slice(1));
    const decorators = properties
        .map((property) => {
        const { required, isArray } = Reflect.getMetadata("swagger/apiModelProperties", constructor, property);
        const propertyType = Reflect.getMetadata("design:type", constructor, property);
        const typedQuery = generateApiQueryObject(property, propertyType, required, isArray);
        return [swagger_1.ApiExtraModels(propertyType), swagger_1.ApiQuery(typedQuery)];
    })
        .flat();
    return common_1.applyDecorators(...decorators);
}
exports.ApiNestedQuery = ApiNestedQuery;
//# sourceMappingURL=api-nested-query.decorator.js.map