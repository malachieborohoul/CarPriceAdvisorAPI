import { Body, Controller, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(usersService: UsersService){}

    update(@Param('id') id:string, @Body() body: CreateUserDto){}
}
