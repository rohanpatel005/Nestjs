import { Body, Delete, Get, HttpCode, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import type { Response } from 'express';
import { UsersService } from './users.service.js';
import { ParamsTokenFactory } from '@nestjs/core/internal';

@Controller('users')
export class UsersController {
    constructor(private userServices:UsersService){}
@Post()
createuser(@Body() body:any){
    return this.userServices.createUser(body)
}
@Get()
getUser(){
    return this.userServices.getUser()
}
@Get("/:id")
getUserById(@Param("id") id:any){
    return this.userServices.getUserById(id)
}
@Put(":id")
updateUser(@Param('id') id:string,@Body() body:any){
    return this.userServices.updateUser(Number(id),body)
}
@Delete(":id")
deleteUser(@Param('id') id:string){
    return this.userServices.deleteUser(Number(id))
}
}
 
