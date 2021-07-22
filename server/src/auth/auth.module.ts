import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
   controllers: [AuthController],
   providers: [AuthService],
   exports: [

   ],
   imports: [
      UsersModule,
      JwtModule.register({
         secret: process.env.PRIVATE_KEY || 'secret',
         signOptions: {
            expiresIn: '24h'
         }
      })
   ]
})
export class AuthModule { }