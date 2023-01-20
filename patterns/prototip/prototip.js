var UserHistory = /** @class */ (function () {
    function UserHistory(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    UserHistory.prototype.clone = function () {
        var target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    };
    return UserHistory;
}());
var user = new UserHistory('teewr@gdfg.it', 'tim');
console.log(user);
var user2 = user.clone();
user2.name = 'tom';
console.log(user2);
