import 'package:mobile/features/auth/domain/datasources/auth_datasources.dart';
import 'package:mobile/features/auth/domain/entities/user.dart';
import 'package:mobile/features/auth/domain/repositories/auth_repository.dart';
import 'package:mobile/features/auth/infrastucture/datasources/auth_datasource_impl.dart';

class AuthRepositoryImpl extends AuthRepository {
  final AuthDataSource dataSource;

  AuthRepositoryImpl({AuthDataSource? dataSource})
    : dataSource = dataSource ?? AuthDatasourceImpl();

  @override
  Future<Map<dynamic, dynamic>> checkAuthStatus(String token) {
    return dataSource.checkAuthStatus(token);
  }

  @override
  Future<User> login(String username, String password) {
    return dataSource.login(username, password);
  }
}
