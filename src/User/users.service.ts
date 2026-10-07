import { Injectable } from "@nestjs/common"

@Injectable()
export class  UsersService{
    getUser(){
        return {
            success:true,message:"Hello from the user module"
        }
    }
}