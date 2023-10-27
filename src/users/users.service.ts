import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private repo: Repository<User>) {}

  async findOne(id: number) {
   const user= await this.repo.findOneBy({ id });

   if(!user){
    throw new NotFoundException("user not found");
   }

   return user;
  }
  async find(email: string) {
   const user= await this.repo.findBy({ email });

   if(!user){
    throw new NotFoundException('user not found');
   }

   return user;
  }
}
