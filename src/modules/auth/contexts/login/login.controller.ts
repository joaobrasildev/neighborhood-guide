import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDTO } from 'src/shared/dtos/login/loginRequest.dto';

@Controller('auth')
export class LoginController {
  @Post('login')
  async execute(@Body() dto: LoginRequestDTO): Promise<string> {
    return `Login: ${dto.login} Password: ${dto.password}`;
  }
}
