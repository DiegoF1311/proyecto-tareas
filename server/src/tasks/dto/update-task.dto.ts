/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsString, MinLength } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The new title of the task' })
  title?: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The new description of the task' })
  description?: string;

  @IsDate()
  @ApiProperty({ description: 'The new due date of the task' })
  dueDate?: Date;

  @IsBoolean()
  @ApiProperty({ description: 'Indicates whether the task is completed' })
  isCompleted?: boolean;
}
