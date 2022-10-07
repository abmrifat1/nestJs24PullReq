import { HttpModule, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({ // decorator
    controllers: [UserController],
    providers: [UserService],
    imports: [HttpModule]
}) 
export class UserModule{}