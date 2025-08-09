import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { User } from './user/entities/user.entity';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Dafe5429@',
      database: 'proyecto-tareas-db',
      entities: [User, Task],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
