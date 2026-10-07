import {Module} from "@nestjs/common"
import { UserController } from "./user.controllers.js"
import { UsersService } from "./users.service.js"
@Module({
    controllers:[UserController],
    providers:[UsersService]
})
export class UserModule{}