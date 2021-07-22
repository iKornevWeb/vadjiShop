import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
@Controller('roles')
export class RolesController {
   constructor(private readonly rolesService: RolesService) { }

   @Post()
   create(@Body() roleDto: CreateRoleDto) {
      return this.rolesService.create(roleDto);
   }

   @Get('/:value')
   findOne(@Param('value') value: string) {
      return this.rolesService.findOne(value);
   }
}