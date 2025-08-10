import '../entities/user.dart';

abstract class AuthDataSource {

  Future<User> login( String username, String password );
  Future<Map<dynamic, dynamic>> checkAuthStatus( String token );

}