interface Prototip<T>{
    clone():T;
}


class UserHistory implements Prototip<UserHistory>{

    createdAt:Date
    constructor(public email:string, public name:string){
        this.createdAt = new Date()
    }

    clone(): UserHistory {
        let target =  new UserHistory(this.email, this.name)
        target.createdAt = this.createdAt
        return target
    }
}


let user = new UserHistory('teewr@gdfg.it','tim')
console.log(user)
let user2 = user.clone()
user2.name = 'tom'
console.log(user2)