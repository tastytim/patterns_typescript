var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = new Map();
    }
    MyMap.prototype.clean = function () {
        this.map = new Map();
    };
    MyMap.get = function () {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    };
    return MyMap;
}());
var Service1 = /** @class */ (function () {
    function Service1() {
    }
    Service1.prototype.addMap = function (key, value) {
        var mymap = MyMap.get();
        mymap.map.set(key, value);
    };
    return Service1;
}());
var Service2 = /** @class */ (function () {
    function Service2() {
    }
    Service2.prototype.getItem = function (key) {
        var mymap = MyMap.get();
        console.log(mymap.map.get(key));
    };
    return Service2;
}());
new Service1().addMap(1, 'Hello');
new Service1().addMap(2, 'Hi');
new Service2().getItem(1);
new Service2().getItem(2);
