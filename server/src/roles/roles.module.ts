import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './model/role.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
     SequelizeModule.forFeature([Role])
  ]
})
export class RolesModule {}
