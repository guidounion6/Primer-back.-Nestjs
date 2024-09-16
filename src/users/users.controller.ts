import { Body, Controller, Delete, Get, Patch, Post, Put, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { createTaskDto } from 'src/tasks/dto/create-task.dto';
import { createUserDto } from './dto/create-user.dto';
import { Validator } from 'class-validator';
import { ApiTags } from '@nestjs/swagger';

@Controller("/users")
export class UsersController {

   constructor(private usersService: UsersService) { }

   @ApiTags("users")
   @Get()
   getUsers() {
      return this.usersService.getUsers()
   }

   @ApiTags("users")
   @Post()
   createUser(@Body() user: createUserDto) {
      return this.usersService.createUser(user)
   }

   @ApiTags("users")
   @Put()
   updateUser() {
      this.usersService.updateUser()
   }

   @ApiTags("users")
   @Patch()
   updateUserStatus() {
      this.usersService.updateUserStatus()
   }

   @ApiTags("users")
   @Delete()
   deleteUser() {
      this.usersService.deleteUser()
   }


}
