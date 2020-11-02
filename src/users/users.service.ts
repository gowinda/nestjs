import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'govinda',
        password: 'govi',
      },
      {
        userId: 2,
        username: 'admin',
        password: 'admin123',
      },
      {
        userId: 3,
        username: 'user',
        password: 'user123',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}