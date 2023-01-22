interface IProvider {
  connect(): void;
  disconnect(): void;
  send(message: string): void;
}

class TelegramProvider implements IProvider {
  connect(): void {
    console.log("Connect to Telegram Provider");
  }
  disconnect(): void {
    console.log("Disconnect from Telegram provider");
  }
  send(message: string): void {
    console.log(message);
  }
}
class WhatsappProvider implements IProvider {
  connect(): void {
    console.log("Connect to Whatsapp Provider");
  }
  disconnect(): void {
    console.log("Disconnect from Whatsapp provider");
  }
  send(message: string): void {
    console.log(message);
  }
}


class NotificationSender{
    constructor(private provider:IProvider){
    }

    sendMessage(message:string){
        this.provider.connect()
        this.provider.send(message)
        this.provider.disconnect()
    }


}


class DelayNotificationSender extends NotificationSender{
    constructor(provider:IProvider){
        super(provider)
    }
    sendDelay(){
    }
}


const sender = new NotificationSender(new TelegramProvider)
sender.sendMessage('Hello Bridge')



const senderW = new NotificationSender(new WhatsappProvider)
senderW.sendMessage('Hello Bridge')