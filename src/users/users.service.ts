import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUser(userId:string,orderId:string):string{
        return `Welcome id ${userId} Your order id is ${orderId}`
    }
     getUsers(page:string,limit:string){
        return `You are currently on page ${page} and per page limit is ${limit}`
    }
    createUser(body:any){
        return `The data you sent ${JSON.stringify(body)}`
    }
}
