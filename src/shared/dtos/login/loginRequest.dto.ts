import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDTO {
  @ApiProperty()
  login: string;

  @ApiProperty()
  password: string;
}
