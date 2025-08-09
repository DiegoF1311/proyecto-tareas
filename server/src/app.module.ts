import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { User } from './user/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: process.env.DATABASE_PORT
        ? parseInt(process.env.DATABASE_PORT, 10)
        : 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [User, Task],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    TasksModule,
    AuthModule,
  ],
  controllers: [],
  providers: [{ provide: 'APP_GUARD', useClass: AuthModule }],
})
export class AppModule {}
