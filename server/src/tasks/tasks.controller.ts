import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
    type: CreateTaskDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  create(@Request() req, @Body() createTaskDto: CreateTaskDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    return this.tasksService.create({ ...createTaskDto, userId: req.user.sub });
  }

  @Get('/all')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({
    status: 200,
    description: 'Returns all tasks',
    type: [CreateTaskDto],
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 204, description: 'No Content' })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get a task by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the task with the specified ID',
    type: CreateTaskDto,
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Get()
  @UseGuards(AuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get tasks by user ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns tasks for the specified user',
    type: [CreateTaskDto],
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findByUser(@Request() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    return this.tasksService.findByUser(req.user.sub);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a task by ID' })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully updated',
    type: UpdateTaskDto,
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @HttpCode(202)
  @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiResponse({
    status: 202,
    description: 'The task has been successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
