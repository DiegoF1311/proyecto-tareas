import 'package:dio/dio.dart';
import 'package:mobile/config/constants/environment.dart';
import 'package:mobile/features/tasks/domain/datasources/task_datasources.dart';
import 'package:mobile/features/tasks/domain/entities/task.dart';
import 'package:mobile/features/tasks/infrastructure/mappers/task_mapper.dart';

class TaskDatasourceImpl extends TaskDataSource {
  final dio = Dio(BaseOptions(baseUrl: Environment.apiUrl));

  @override
  Future<String> createTask(Task task, String token) async {
    try {
      final response = await dio.post(
        '/tasks',
        data: TaskMapper.toJson(task),
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );
      final taskId = response.data['id'];
      return taskId;
    } catch (e) {
      throw Exception('Failed to create task: $e');
    }
  }

  @override
  Future<void> deleteTask(String id, String token) async {
    try {
      await dio.delete(
        '/tasks/$id',
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );
    } catch (e) {
      throw Exception('Failed to delete task: $e');
    }
  }

  @override
  Future<List<Task>> getTaskByUser(String token) async {
    try {
      final response = await dio.get(
        '/tasks',
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );
      return (response.data as List)
          .map((taskJson) => TaskMapper.fromJson(taskJson))
          .toList();
    } catch (e) {
      throw Exception('Failed to fetch task: $e');
    }
  }

  @override
  Future<String> updateTask(Task task, String token) async {
    try {
      final response = await dio.put(
        '/tasks/${task.id}',
        data: TaskMapper.toJson(task),
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );
      return response.data['id'];
    } catch (e) {
      throw Exception('Failed to update task: $e');
    }
  }
}
