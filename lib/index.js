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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var progress = require("cli-progress");
var dryRun = false;
var file = "following.json";
var pageSize = 100;
function getFollowing() {
    return __awaiter(this, void 0, void 0, function () {
        var maxId, res, json, following;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    maxId = "0";
                    following = [];
                    _a.label = 1;
                case 1:
                    if (!(maxId != null)) return [3 /*break*/, 4];
                    console.log("Fetching following with maxId: ".concat(maxId));
                    return [4 /*yield*/, fetch("https://www.instagram.com/api/v1/friendships/7970116605/following/?count=".concat(pageSize, "&max_id=").concat(maxId), {
                            headers: {
                                Host: "www.instagram.com",
                                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
                                Accept: "application/json",
                                "Accept-Language": "en-US,en;q=0.5",
                                "Accept-Encoding": "identity",
                                "X-CSRFToken": "8vRZbqH4cd02zYMsW173DapIz2lwLSJg",
                                "X-IG-App-ID": "936619743392459",
                                "X-ASBD-ID": "129477",
                                "X-IG-WWW-Claim": "hmac.AR1O-JzAk0d_Q8-hmHaet3z4so0_tNG73uMCc2g7Yx7AjIyC",
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
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    json = (_a.sent());
                    maxId = json.next_max_id;
                    following.push.apply(following, __spreadArray([], __read(json.users), false));
                    console.log("Fetched ".concat(json.users.length, ", total: ").concat(following.length));
                    return [3 /*break*/, 1];
                case 4:
                    fs.writeFileSync(file, JSON.stringify(following, null, 2));
                    return [2 /*return*/];
            }
        });
    });
}
function unfollow() {
    return __awaiter(this, void 0, void 0, function () {
        var following, usersToUnfollow, bar, usersToUnfollow_1, usersToUnfollow_1_1, user, res, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    following = JSON.parse(fs.readFileSync(file, "utf-8"));
                    usersToUnfollow = following.filter(function (user) { return user.is_private === false; });
                    console.log("Unfollowing ".concat(usersToUnfollow.length, " public profiles..."));
                    console.log("After this script, you will be following ".concat(following.length - usersToUnfollow.length, " users. You were previously following ").concat(following.length, " users."));
                    bar = new progress.SingleBar({}, progress.Presets.shades_classic);
                    bar.start(usersToUnfollow.length, 0);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, 8, 9]);
                    usersToUnfollow_1 = __values(usersToUnfollow), usersToUnfollow_1_1 = usersToUnfollow_1.next();
                    _b.label = 2;
                case 2:
                    if (!!usersToUnfollow_1_1.done) return [3 /*break*/, 6];
                    user = usersToUnfollow_1_1.value;
                    if (!!dryRun) return [3 /*break*/, 4];
                    console.log("Unfollowing public account ".concat(user.username, "..."));
                    return [4 /*yield*/, fetch("https://www.instagram.com/api/v1/friendships/destroy/".concat(user.id, "/"), {
                            method: "POST",
                            headers: {
                                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
                                Accept: "application/json",
                                "Accept-Language": "en-US,en;q=0.5",
                                "Accept-Encoding": "identity",
                                "X-CSRFToken": "8vRZbqH4cd02zYMsW173DapIz2lwLSJg",
                                "X-Instagram-AJAX": "1017196109",
                                "X-IG-App-ID": "936619743392459",
                                "X-ASBD-ID": "129477",
                                "X-IG-WWW-Claim": "hmac.AR1O-JzAk0d_Q8-hmHaet3z4so0_tNG73uMCc2g7Yx7AjIyC",
                                "Content-Type": "application/x-www-form-urlencoded",
                                "X-Requested-With": "XMLHttpRequest",
                                "Content-Length": "292",
                                Origin: "https://www.instagram.com",
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
                case 3:
                    res = _b.sent();
                    if (res.ok && res.status === 200) {
                        console.log("Unfollowed: ".concat(user.username));
                    }
                    else {
                        console.error("Failed to unfollow: ".concat(user.username));
                        console.log(res);
                    }
                    _b.label = 4;
                case 4:
                    bar.increment();
                    _b.label = 5;
                case 5:
                    usersToUnfollow_1_1 = usersToUnfollow_1.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (usersToUnfollow_1_1 && !usersToUnfollow_1_1.done && (_a = usersToUnfollow_1.return)) _a.call(usersToUnfollow_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9:
                    bar.stop();
                    return [2 /*return*/];
            }
        });
    });
}
unfollow();
