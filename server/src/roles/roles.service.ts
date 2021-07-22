import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './model/role.model';

@Injectable()
export class RolesService {

   constructor(
      @InjectModel(Role)
      private roleModel: typeof Role
   ) { }

   async create(createRoleDto: CreateRoleDto) {
      return await this.roleModel.create(createRoleDto);
   }

   async findOne(value: string): Promise<Role> {
      return await this.roleModel.findOne({where: {value}});
   }
}
