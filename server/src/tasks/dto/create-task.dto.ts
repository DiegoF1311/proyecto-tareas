import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The title of the task' })
  title: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The description of the task' })
  description: string;

  @Type(() => Date)
  @ApiProperty({ description: 'The due date of the task' })
  dueDate: Date;
}
