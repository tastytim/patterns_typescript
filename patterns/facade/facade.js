var Notify = /** @class */ (function () {
    function Notify() {
    }
    Notify.prototype.send = function (template, to) {
        console.log("sent ".concat(template, " to ").concat(to));
    };
    return Notify;
}());
var Logg = /** @class */ (function () {
    function Logg() {
    }
    Logg.prototype.print = function (message) {
        console.log(message);
    };
    return Logg;
}());
var Template = /** @class */ (function () {
    function Template() {
        this.tempalates = [{ name: 'Name', template: 'template' }];
    }
    Template.prototype.getByName = function (name) {
        return this.tempalates.find(function (e) { return e.name === name; });
    };
    return Template;
}());
var NotificationFacade = /** @class */ (function () {
    function NotificationFacade() {
        this.notify = new Notify(), this.log = new Logg(), this.template = new Template();
    }
    NotificationFacade.prototype.send = function (to, templateName) {
        var data = this.template.getByName(templateName);
        if (!data) {
            this.log.print('template was not found');
            return;
        }
        this.notify.send(data.template, to);
        this.log.print('template sent');
    };
    return NotificationFacade;
}());
var s = new NotificationFacade();
s.send('Tim', 'Name');
