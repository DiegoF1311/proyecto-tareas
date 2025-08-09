import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The new title of the task' })
  title?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The new description of the task' })
  description?: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({ description: 'The new due date of the task' })
  dueDate?: Date;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ description: 'Indicates whether the task is completed' })
  isCompleted?: boolean;
}
