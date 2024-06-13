"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decimal_js_1 = __importDefault(require("decimal.js"));
function jsFreeFloatStep(number, defaultStep = 0.1) {
    if (!number || number === 0)
        return defaultStep;
    const decimalPlaces = new decimal_js_1.default(number).decimalPlaces();
    const dynamicStep = new decimal_js_1.default(10).pow(-decimalPlaces);
    return decimal_js_1.default.min(defaultStep, dynamicStep).toNumber();
}
exports.default = jsFreeFloatStep;
//# sourceMappingURL=index.js.map