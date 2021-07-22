import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from './model/role.model';
import { User } from 'src/users/model/user.model';
import { UserRoles } from './model/user-roles.model';

@Module({
   controllers: [RolesController],
   providers: [RolesService],
   imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
   exports: [RolesService]
})
export class RolesModule { }