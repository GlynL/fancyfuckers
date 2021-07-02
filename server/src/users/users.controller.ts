import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService){}
  @Get()
  async getUsers(@Req() request: Request): Promise<string> {
    return this.usersService.get();
  }

  @Post()
  async create(): Promise<string> {
    return this.usersService.create()
  }
}
