import 'package:flutter/material.dart';
import 'package:mobile/features/tasks/domain/entities/task.dart';
import 'package:mobile/features/tasks/domain/repositories/task_repository.dart';

class TaskProvider extends ChangeNotifier {
  final TaskRepository taskRepository;
  List<Task> tasks = [];

  TaskProvider(this.taskRepository);

  Future<void> getTaskById(String id, String token) async {
    tasks = await taskRepository.getTaskByUser(token);
    notifyListeners();
  }

  Future<void> createTask(Task task, String token) async {
    await taskRepository.createTask(task, token);
    notifyListeners();
  }

  Future<void> updateTask(Task task, String token) async {
    await taskRepository.updateTask(task, token);
    tasks = await taskRepository.getTaskByUser(token);
    notifyListeners();
  }

  Future<void> deleteTask(String id, String token) async {
    await taskRepository.deleteTask(id, token);
    tasks = await taskRepository.getTaskByUser(token);
    notifyListeners();
  }
}
