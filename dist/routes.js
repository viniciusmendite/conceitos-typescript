"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoginUser = exports.showUserName = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function showUserName(request, response) {
    response.json({ name: 'Vinícius Mendite' });
}
exports.showUserName = showUserName;
function createLoginUser(request, response) {
    var user = CreateUser_1.default({
        name: 'bininsu',
        email: 'vinicius',
        password: '1234'
    });
    return response.json(user);
}
exports.createLoginUser = createLoginUser;
