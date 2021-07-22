import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { Role } from 'src/roles/model/role.model';
import { UserRoles } from 'src/roles/model/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
@Module({
   controllers: [UsersController],
   providers: [UsersService],
   imports: [
      SequelizeModule.forFeature([User, Role, UserRoles]),
      RolesModule
   ],
   exports: [UsersService]
})
export class UsersModule { }