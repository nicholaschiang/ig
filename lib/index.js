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
var fs = require("fs");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var res, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, fetch("https://www.instagram.com/api/v1/friendships/7970116605/following/?count=10", {
                        headers: {
                            Host: "www.instagram.com",
                            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
                            Accept: "application/json",
                            "Accept-Language": "en-US,en;q=0.5",
                            "Accept-Encoding": "identity",
                            "X-CSRFToken": "8vRZbqH4cd02zYMsW173DapIz2lwLSJg",
                            "X-IG-App-ID": "936619743392459",
                            "X-ASBD-ID": "129477",
                            "X-IG-WWW-Claim": "hmac.AR1O-JzAk0d_Q8-hmHaet3z4so0_tNG73uMCc2g7Yx7AjKfp",
                            "X-Requested-With": "XMLHttpRequest",
                            DNT: "1",
                            Connection: "keep-alive",
                            Referer: "https://www.instagram.com/niicholaschiiang/following/",
                            Cookie: 'csrftoken=8vRZbqH4cd02zYMsW173DapIz2lwLSJg; wd=1103x1012; mid=ZwbZVQAEAAGUk0-g3Thb6ddxi1PI; datr=VdkGZ1n2YF29y5hI7b-J6bVC; ig_did=F6210A12-46FC-45E7-AB8D-403C4493B55E; rur="CCO\x2c547970116605\x2c541760039578:01f774761037946540a1eefef464fbfbe053311c79b3fc13e694d4997f065cdf1b8482e1"; ds_user_id=7970116605; sessionid=7970116605%3AjfxJuolPcdjdGd%3A26%3AAYfyfiWqTU03Vl64fo3J80_KKP9nN-5th5UHF3McGg',
                            "Sec-Fetch-Dest": "empty",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Site": "same-origin",
                            Priority: "u=0",
                            TE: "trailers",
                        },
                    })];
                case 1:
                    res = _f.sent();
                    console.log(res);
                    _b = (_a = fs).writeFileSync;
                    _c = ["following.json"];
                    _e = (_d = JSON).stringify;
                    return [4 /*yield*/, res.json()];
                case 2:
                    _b.apply(_a, _c.concat([_e.apply(_d, [_f.sent(), null, 2])]));
                    return [2 /*return*/];
            }
        });
    });
}
main();
