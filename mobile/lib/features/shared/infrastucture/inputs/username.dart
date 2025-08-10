import 'package:formz/formz.dart';

enum UsernameError { empty, length }

class Username extends FormzInput<String, UsernameError> {

  // Expresión regular: solo letras, números, guiones bajos, sin espacios.
  static final RegExp usernameRegExp = RegExp(
    r'^[a-zA-Z0-9_]+$',
  );

  const Username.pure() : super.pure('');

  const Username.dirty(super.value) : super.dirty();

  String? get errorMessage {
    if (isValid || isPure) return null;

    if (displayError == UsernameError.empty) return 'El campo es requerido';
    if (displayError == UsernameError.length) return 'Mínimo 3 caracteres';

    return null;
  }

  @override
  UsernameError? validator(String value) {
    if (value.isEmpty || value.trim().isEmpty) return UsernameError.empty;
    if (value.length < 3) return UsernameError.length;
    return null;
  }
}
