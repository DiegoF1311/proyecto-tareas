import 'package:mobile/features/auth/domain/entities/user.dart';

class UserMapper {
  static User userJsonToEntity(Map<String, dynamic> json) => User(
    id: json['user']['id'],
    name: json['user']['name'],
    username: json['user']['username'],
    email: json['user']['email'],
    token: json['access_token'],
  );
}
