import 'package:mobile/features/tasks/domain/entities/task.dart';

class TaskMapper {
  static toJson(Task task) {
    return {
      'id': task.id,
      'title': task.title,
      'description': task.description,
      'dueDate': task.dueDate.toIso8601String(),
      'isCompleted': task.isCompleted,
    };
  }

  static Task fromJson(Map<String, dynamic> json) {
    return Task(
      id: json['id'],
      title: json['title'],
      description: json['description'],
      dueDate: DateTime.parse(json['dueDate']),
      isCompleted: json['isCompleted'] ?? false,
    );
  }
}