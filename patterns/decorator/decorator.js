// @nullUsersAdvanced
// @nullUsers
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Users = /** @class */ (function () {
    function Users() {
        this.users = 3000;
    }
    // createdAt: Date;
    Users.prototype.getUsers = function () {
        throw new Error('Errore');
    };
    __decorate([
        Log
    ], Users.prototype, "getUsers");
    Users = __decorate([
        setUsers(200),
        setUsersAdvanced(52),
        createdAt
    ], Users);
    return Users;
}());
function Log(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function createdAt(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.createdAt = new Date();
            return _this;
        }
        return class_1;
    }(constructor));
}
function nullUsers(target) {
    target.prototype.users = 0;
}
function nullUsersAdvanced(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.users = 3;
            return _this;
        }
        return class_2;
    }(constructor));
}
function setUsers(users) {
    return function (target) {
        target.prototype.users = users;
    };
}
function setUsersAdvanced(users) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_3, _super);
            function class_3() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.users = users;
                return _this;
            }
            return class_3;
        }(constructor));
    };
}
console.log(new Users().getUsers());
// console.log((new Users() as IUserService & CreatedAt).createdAt);
