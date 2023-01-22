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
var TelegramProvider = /** @class */ (function () {
    function TelegramProvider() {
    }
    TelegramProvider.prototype.connect = function () {
        console.log("Connect to Telegram Provider");
    };
    TelegramProvider.prototype.disconnect = function () {
        console.log("Disconnect from Telegram provider");
    };
    TelegramProvider.prototype.send = function (message) {
        console.log(message);
    };
    return TelegramProvider;
}());
var WhatsappProvider = /** @class */ (function () {
    function WhatsappProvider() {
    }
    WhatsappProvider.prototype.connect = function () {
        console.log("Connect to Whatsapp Provider");
    };
    WhatsappProvider.prototype.disconnect = function () {
        console.log("Disconnect from Whatsapp provider");
    };
    WhatsappProvider.prototype.send = function (message) {
        console.log(message);
    };
    return WhatsappProvider;
}());
var NotificationSender = /** @class */ (function () {
    function NotificationSender(provider) {
        this.provider = provider;
    }
    NotificationSender.prototype.sendMessage = function (message) {
        this.provider.connect();
        this.provider.send(message);
        this.provider.disconnect();
    };
    return NotificationSender;
}());
var DelayNotificationSender = /** @class */ (function (_super) {
    __extends(DelayNotificationSender, _super);
    function DelayNotificationSender(provider) {
        return _super.call(this, provider) || this;
    }
    DelayNotificationSender.prototype.sendDelay = function () {
    };
    return DelayNotificationSender;
}(NotificationSender));
var sender = new NotificationSender(new TelegramProvider);
sender.sendMessage('Hello Bridge');
var senderW = new NotificationSender(new WhatsappProvider);
senderW.sendMessage('Hello Bridge');
