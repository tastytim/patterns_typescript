class KVDatabase {
    private db:Map<string,string> = new Map()
    save (key:string,value:string){
        this.db.set(key,value)
    }
}




class  PersistentDB{
    savePersistant(data:Object){
       console.log(data)
    }
}

class PersistantAdapter extends KVDatabase{
    constructor(public database: PersistentDB){
        super()
    }

    override save(key:string, value:string):void{
        this.database.savePersistant({key,value})
    }
}

function run(base:KVDatabase){
    base.save('key', 'myvalue')
}


run(new PersistantAdapter(new PersistentDB))






