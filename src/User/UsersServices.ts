import { User } from "./user"


export class UsersServices {
  findOne(username: string) {
    let user: User = {
        email: "daud.mammaev@bk.ru",
        password: "123456",
        username: "daud.mammaev@bk.ru",
        id: ""
    }
    return user;
  }
  
}