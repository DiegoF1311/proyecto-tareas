import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto & { userId: string }): Promise<Task> {
    const task = this.taskRepository.create({
      ...createTaskDto,
      user: { id: createTaskDto.userId },
    });
    return this.taskRepository.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: string): Promise<Task | null> {
    return this.taskRepository.findOneBy({ id });
  }

  findByUser(userId: string): Promise<Task[]> {
    return this.taskRepository.find({ where: { user: { id: userId } } });
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.save({ id, ...updateTaskDto });
  }

  async remove(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
