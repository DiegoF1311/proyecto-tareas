import 'package:dio/dio.dart';
import 'package:mobile/config/config.dart';
import 'package:mobile/features/auth/domain/datasources/auth_datasources.dart';
import 'package:mobile/features/auth/domain/entities/user.dart';
import 'package:mobile/features/auth/infrastucture/mappers/user_mapper.dart';

class AuthDatasourceImpl extends AuthDataSource {
  final dio = Dio(BaseOptions(baseUrl: Environment.apiUrl));

  @override
  Future<Map<dynamic, dynamic>> checkAuthStatus(String token) async {
    try {
      final response = await dio.get(
        '/auth/checkstatus',
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );

      final user = {'id': response.data['sub'], 'username': response.data['username'], 'token': token};
      return user;
    } catch (e) {
      throw Exception();
    }
  }

  @override
  Future<User> login(String username, String password) async {
    try {
      final response = await dio.post(
        '/auth/login',
        data: {'username': username, 'password': password},
      );

      final user = UserMapper.userJsonToEntity(response.data);
      return user;
    } catch (e) {
      throw Exception();
    }
  }
}
