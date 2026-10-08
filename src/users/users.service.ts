import { Injectable, Delete } from '@nestjs/common';
import { timeStamp } from 'console';

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
    updateUser(id:number,body:any){
        
        const index=this.users.findIndex(user=>user.id===id) 
        if(index===-1){
            return {
                message:"User not found"
            }
        }
        this.users[index]={id,...body}
        return {
            message:"User Update succesfully",
            data:this.users[index]
        }
    }
    deleteUser(id:Number){
        const index=this.users.findIndex(user=>user.id===id) 
        if(index===-1){
            return {
                message:"User not found"
            }
        }
        const deltedUser=this.users[index]
        this.users.splice(index,1)
        
        return {
            message:"User Deleted succesfully",
            data:this.users[index]
        }
    }
}
