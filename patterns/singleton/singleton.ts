class MyMap {
  private static instance: MyMap;
  map: Map<number, string> = new Map();

  private constructor() {}
  clean(){
    this.map = new Map()
  }

  public static get(): MyMap {
    if (!MyMap.instance) {
        MyMap.instance = new MyMap()
    }
    return MyMap.instance
  }
}


class Service1{
    addMap(key:number,value:string){
        const mymap = MyMap.get()
        mymap.map.set(key,value)
    }

} 

class Service2{
    getItem(key:number){
        const mymap = MyMap.get()
        console.log(mymap.map.get(key))
    }
}

new Service1().addMap(1, 'Hello')
new Service1().addMap(2, 'Hi')
new Service2().getItem(1)
new Service2().getItem(2)