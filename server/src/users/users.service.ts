import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './model/user.model';

@Injectable()
export class UsersService {

   constructor(
      @InjectModel(User) private userModel: typeof User,
      private roleService: RolesService
   ) { }

   async create(userDto: CreateUserDto): Promise<User> {
      const user = await this.userModel.create(userDto);
      const role = await this.roleService.findOne("USER");
      await user.$set('roles', [role.id]);
      user.roles = [role];

      return user;
   }

   async findAll(): Promise<User[]> {
      return await this.userModel.findAll<User>({ include: { all: true } });
   }

   async findOne(id: number): Promise<User> {
      return await this.userModel.findByPk<User>(id);

   }

   async update(id: number, userDto: UpdateUserDto) {
      return await this.userModel.update(userDto, { where: { id: id } })
   }

   async remove(id: number) {
      return await this.userModel.destroy({ where: { id: id } });
   }

   async getUserByEmail(email: string) {
      const user = await this.userModel.findOne({ where: { email }, include: { all: true } });
      return user;
   }
}
