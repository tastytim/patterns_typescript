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
var KVDatabase = /** @class */ (function () {
    function KVDatabase() {
        this.db = new Map();
    }
    KVDatabase.prototype.save = function (key, value) {
        this.db.set(key, value);
    };
    return KVDatabase;
}());
var PersistentDB = /** @class */ (function () {
    function PersistentDB() {
    }
    PersistentDB.prototype.savePersistant = function (data) {
        console.log(data);
    };
    return PersistentDB;
}());
var PersistantAdapter = /** @class */ (function (_super) {
    __extends(PersistantAdapter, _super);
    function PersistantAdapter(database) {
        var _this = _super.call(this) || this;
        _this.database = database;
        return _this;
    }
    PersistantAdapter.prototype.save = function (key, value) {
        this.database.savePersistant({ key: key, value: value });
    };
    return PersistantAdapter;
}(KVDatabase));
function run(base) {
    base.save('key', 'myvalue');
}
run(new PersistantAdapter(new PersistentDB));
