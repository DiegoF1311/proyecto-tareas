/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The name of the user' })
  name: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The username of the user' })
  username: string;

  @IsEmail()
  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @IsString()
  @IsStrongPassword({ minLength: 8 })
  @ApiProperty({
    description:
      'The password of the user, must be at least 8 characters long with a mix of letters, numbers, and symbols',
  })
  password: string;
}
