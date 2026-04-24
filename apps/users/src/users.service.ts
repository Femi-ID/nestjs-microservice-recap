import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World!';
  }

  findAll() {
    console.log('from the users-service microservice...');
    return { users: 'all users data...' };
  }
}
