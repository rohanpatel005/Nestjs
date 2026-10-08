import { Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';

import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
    constructor(private userServices:UsersService){}
    @Get(":userId/order/:orderId")
    getUser(@Param('userId') userId:string,@Param("orderId") orderId:string){
         return this.userServices.getUser(userId,orderId)
        }
    
}
