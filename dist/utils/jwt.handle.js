"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
require("dotenv/config");
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || 'token.0810823';
const generateToken = (email) => {
    console.log(JWT_SECRET);
    const jwt = (0, jsonwebtoken_1.sign)({ email }, JWT_SECRET, { expiresIn: '7d' });
    console.log(jwt);
    return jwt;
};
exports.generateToken = generateToken;
const verifyToken = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.verifyToken = verifyToken;
