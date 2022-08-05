import { Module } from '@nestjs/common';
import { LoginController } from './contexts/login/login.controller';

@Module({
  controllers: [LoginController],
  providers: [],
})
export class AuthModule {}
