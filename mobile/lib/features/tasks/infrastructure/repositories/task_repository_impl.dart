import 'package:mobile/features/tasks/domain/datasources/task_datasources.dart';
import 'package:mobile/features/tasks/domain/entities/task.dart';
import 'package:mobile/features/tasks/domain/repositories/task_repository.dart';
import 'package:mobile/features/tasks/infrastructure/datasources/task_datasource_impl.dart';

class TaskRepositoryImpl extends TaskRepository {
  final TaskDataSource dataSource;

  TaskRepositoryImpl({TaskDataSource? dataSource})
    : dataSource = dataSource ?? TaskDatasourceImpl();

  @override
  Future<String> createTask(Task task, String token) {
    return dataSource.createTask(task, token);
  }

  @override
  Future<void> deleteTask(String id, String token) {
    return dataSource.deleteTask(id, token);
  }

  @override
  Future<List<Task>> getTaskByUser(String token) {
    return dataSource.getTaskByUser(token);
  }

  @override
  Future<String> updateTask(Task task, String token) {
    return dataSource.updateTask(task, token);
  }
}
