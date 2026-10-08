import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUser(userId:string,orderId:string):string{
        return `Welcome id ${userId} Your order id is ${orderId}`
    }
}
