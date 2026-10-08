import { Body, Get, HttpCode, Param, Post, Query, Res } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import type { Response } from 'express';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
    constructor(private userServices:UsersService){}
//    @Get()
//    getuser(){
//     return "All the users"
//    }
    
    
//     @Post()
//     @HttpCode(201)
//     createuser(@Body() body:any){
//         return this.userServices.createUser(body)
//     }
@Get()
getUser(@Res() res:Response){
    res.status(200).json({
        success:true,
        message:"User Found"
    })
}
 }
