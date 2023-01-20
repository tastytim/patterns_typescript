// @nullUsersAdvanced
// @nullUsers

interface IUserService {
  users: number;
  getUsers(): number;
}

@setUsers(200)
@setUsersAdvanced(52)
@createdAt
class Users implements IUserService {
  users: number = 3000;
  // createdAt: Date;

  @Log
  getUsers():number {
    throw new Error('Errore')
  }
}

function Log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
) {
  console.log(target)
  console.log(propertyKey)
  console.log(descriptor)
}

function createdAt<T extends { new (...args: any[]) }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

function nullUsers(target: Function) {
  target.prototype.users = 0;
}

function nullUsersAdvanced<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    users = 3;
  };
}

function setUsers(users: number) {
  return (target: Function) => {
    target.prototype.users = users;
  };
}

function setUsersAdvanced(users: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users;
    };
  };
}

type CreatedAt = {
  createdAt: Date;
};

 console.log(new Users().getUsers());
// console.log((new Users() as IUserService & CreatedAt).createdAt);
