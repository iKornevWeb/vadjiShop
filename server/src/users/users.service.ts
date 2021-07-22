import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './model/user.model';

@Injectable()
export class UsersService {

   constructor(
      @InjectModel(User)
      private userModel: typeof User
   ) { }

   async create(createUserDto: CreateUserDto): Promise<User> {
      const user = await this.userModel.create(createUserDto);
      return user;
   }

   async findAll(): Promise<User[]> {
      return await this.userModel.findAll<User>();
   }

   async findOne(id: number): Promise<User> {
       return await this.userModel.findByPk<User>(id);

   }

   async update(id: number, updateUserDto: UpdateUserDto) {
      return await this.userModel.update(updateUserDto, {where: {id: id}})
   }

   async remove(id: number) {
      return await this.userModel.destroy({where:{id: id}});
   }
}
