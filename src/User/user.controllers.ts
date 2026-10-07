import { Controller ,Get } from "@nestjs/common";
import { UsersService } from "./users.service.js";
@Controller('users')
export class UserController{
    constructor( private usersService:UsersService){}
    @Get()
    getUser(){
        return this.usersService.getUser()
    }
}