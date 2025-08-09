import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The username of the user' })
  username: string;

  @IsString()
  @MinLength(6)
  @ApiProperty({ description: 'The password of the user' })
  password: string;
}
