class Notify{
    constructor(){}
    send(template:string, to:string){
        console.log(`sent ${template} to ${to}`)
    }
}

class Logg{
    constructor(){}
    print(message:string){
        console.log(message)
    }
}


class Template{
    private tempalates = [{name:'Name', template:'template'}]

    getByName(name:string){
        return this.tempalates.find(e => e.name === name)
    }
}

class NotificationFacade{
    private notify: Notify
    private log : Logg
    private template:Template

    constructor(){
        this.notify = new Notify(),this.log = new Logg(), this.template = new Template()
    }

    send(to:string, templateName:string){
         const data = this.template.getByName(templateName)
         
         if(!data){
            this.log.print('template was not found')
            return
         }
         this.notify.send(data.template, to)
         this.log.print('template sent')
    }


}

const s = new NotificationFacade()
s.send('Tim', 'Name')