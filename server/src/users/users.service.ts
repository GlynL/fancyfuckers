import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  create() {
    return 'user'
  }
  get() {
    return 'users'
  }
}
