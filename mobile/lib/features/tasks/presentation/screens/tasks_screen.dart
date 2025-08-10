import 'package:flutter/material.dart';
import 'package:mobile/features/shared/shared.dart';

class TasksScreen extends StatelessWidget {
  const TasksScreen({super.key});

  @override
  Widget build(BuildContext context) {
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
      body: _TasksView(),
      floatingActionButton: FloatingActionButton.extended(
        label: const Text('Nueva Tarea'),
        icon: const Icon( Icons.add ),
        onPressed: () {},
      ),
    );
  }
}


class _TasksView extends StatelessWidget {
  const _TasksView();

  @override
  Widget build(BuildContext context) {
    return ListView();
  }
}