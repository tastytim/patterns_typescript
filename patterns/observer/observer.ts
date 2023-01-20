interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

class Lead {
  constructor(public name: string, public phone: string) {}
}

class NewLead implements Subject {
  private observers: Observer[] = [];
  public state: Lead;

  subscribe(observer: Observer): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }else{
        return;
    }
  }
  unsubscribe(observer: Observer): void {
    let observerIndex = this.observers.indexOf(observer);
    if (observerIndex == -1) {
      return;
    } else {
      this.observers.splice(observerIndex, 1);
    }
  }
  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class NotoficationService implements Observer {
  update(subject: Subject): void {
    console.log("NotoficationService poluchil uvedomplenie");
    console.log(subject)
  }
}
class LeadService implements Observer {
  update(subject: Subject): void {
    console.log("LeadService poluchil uvedomplenie");
    console.log(subject)
  }
}


const subject = new NewLead()
subject.state = new Lead('tim', '5000')
const ns = new NotoficationService()
const ls = new LeadService()

subject.subscribe(ns)
subject.subscribe(ls)
subject.notify()
subject.unsubscribe(ns)
subject.notify()
