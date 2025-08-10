import 'package:mobile/features/tasks/domain/entities/task.dart';

abstract class TaskDataSource {

  Future<List<Task>> getTaskByUser(String token);
  Future<String> createTask(Task task, String token);
  Future<String> updateTask(Task task, String token);
  Future<void> deleteTask(String id, String token);

}