'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Hapi = require("@hapi/hapi");
function getData(type, search, format) {
    return __awaiter(this, void 0, void 0, function () {
        var response, textData, fixedResponse, data, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://swapi.dev/api/".concat(type, "/?search=").concat(search, "&format=").concat(format))];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    if (!(format === "wookiee")) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    textData = _a.sent();
                    fixedResponse = textData.replace(/whhuanan/g, '"whhuanan"');
                    data = JSON.parse(fixedResponse);
                    return [2 /*return*/, data];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var server;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                server = Hapi.server({
                    port: 3000,
                    host: 'localhost',
                    routes: {
                        cors: {
                            origin: ['*'],
                            headers: ['Accept', 'Content-Type'],
                            additionalHeaders: ['X-Requested-With']
                        }
                    }
                });
                server.route({
                    method: 'POST',
                    path: '/login',
                    handler: function (request, h) {
                        var _a = request.payload, username = _a.username, password = _a.password;
                        var validUser = {
                            username: 'Luke',
                            password: 'DadSucks'
                        };
                        if (username === validUser.username && password === validUser.password) {
                            return h.response({
                                status: 'success',
                                message: 'Login successful!',
                                username: username
                            }).code(200);
                        }
                        else {
                            return h.response({
                                status: 'fail',
                                message: 'Invalid username or password'
                            }).code(401);
                        }
                    }
                });
                server.route({
                    method: 'GET',
                    path: '/search',
                    handler: function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
                        var _a, type, search, format, data;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = request.query, type = _a.type, search = _a.search, format = _a.format;
                                    if (!(type && search && format)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, getData(type, search, format)];
                                case 1:
                                    data = _b.sent();
                                    console.log(data);
                                    return [2 /*return*/, h.response(data).code(200)];
                                case 2: return [2 /*return*/, h.response({ message: 'Missing required parameters' }).code(400)];
                            }
                        });
                    }); },
                });
                return [4 /*yield*/, server.start()];
            case 1:
                _a.sent();
                console.log('Server running on %s', server.info.uri);
                return [2 /*return*/];
        }
    });
}); };
process.on('unhandledRejection', function (err) {
    console.log(err);
    process.exit(1);
});
init();
