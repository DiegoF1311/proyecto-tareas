import 'package:flutter/material.dart';
import 'package:mobile/features/shared/shared.dart';
import 'package:mobile/features/tasks/domain/entities/task.dart';
import 'package:mobile/features/tasks/presentation/providers/task_provider.dart';
import 'package:provider/provider.dart';

class TasksScreen extends StatelessWidget {
  const TasksScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final taskProvider = context.watch<TaskProvider>();

    final scaffoldKey = GlobalKey<ScaffoldState>();

    return Scaffold(
      drawer: SideMenu( scaffoldKey: scaffoldKey ),
      appBar: AppBar(
        title: const Text('Tasks'),
        actions: [
          IconButton(
            onPressed: (){},
            icon: const Icon( Icons.refresh_rounded)
          )
        ],
      ),
      body: _TasksView(taskProvider.tasks),
      floatingActionButton: FloatingActionButton.extended(
        label: const Text('Nueva Tarea'),
        icon: const Icon( Icons.add ),
        onPressed: () {},
      ),
    );
  }
}


class _TasksView extends StatelessWidget {
  final List<Task> tasks;

  const _TasksView(this.tasks);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: tasks.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text( tasks[index].title ),
          subtitle: Text( tasks[index].description ),
          trailing: tasks[index].isCompleted
            ? const Icon(Icons.check_circle, color: Colors.green)
            : const Icon(Icons.radio_button_unchecked, color: Colors.red),
        );
      },
      );
  }
}