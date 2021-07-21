import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
@Module({
   controllers: [],
   providers: [],
   imports: [
      SequelizeModule.forRoot({
         dialect: 'postgres',
         host: 'localhost',
         port: 5543,
         username: 'admin',
         password: '123123',
         database: 'vadjiShop',
         models: []
         })
  ]
})
export class AppModule { }
