import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users=[{id:1,name:"Rohan",email:"rohan@gmail.com"}]
    createUser(body:any){
        this.users.push(body)
        return {
            'succes':true,
            'message':'user successfully created',
            "Data":body

        }
    }
    getUser(){
        return this.users
    }
    getUserById(id:any){
        
        const user=this.users.find((arr)=>{
            
           return  arr.id===id
        })
        console.log(user)
        return {
            user
        }
    }
}
