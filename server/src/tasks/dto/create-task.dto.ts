/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The title of the task' })
  title: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The description of the task' })
  description: string;

  @IsDate()
  @ApiProperty({ description: 'The due date of the task' })
  dueDate: Date;

  @IsString()
  @ApiProperty({ description: 'The ID of the user who created the task' })
  userId: string;
}
