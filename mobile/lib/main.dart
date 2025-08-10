import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart'
    hide ChangeNotifierProvider;
import 'package:mobile/config/config.dart';
import 'package:mobile/features/tasks/infrastructure/repositories/task_repository_impl.dart';
import 'package:mobile/features/tasks/presentation/providers/task_provider.dart';
import 'package:provider/provider.dart';

void main() async {
  await Environment.initEnvironment();
  final taskRepository = TaskRepositoryImpl();
  runApp(
    ProviderScope(
      child: MultiProvider(
        providers: [
          ChangeNotifierProvider(
            create: (_) => TaskProvider(taskRepository),
          ),
        ],
        child: MainApp(),
      ),
    ),
  );
}

class MainApp extends ConsumerWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appRouter = ref.watch(goRouterProvider);

    return MaterialApp.router(
      routerConfig: appRouter,
      theme: AppTheme().getTheme(),
      debugShowCheckedModeBanner: false,
    );
  }
}
