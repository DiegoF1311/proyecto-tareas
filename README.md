Gestor de Tareas Personal

Este proyecto es una prueba técnica para desarrollar una aplicación de gestión de tareas. Consta de un backend con NestJS y una Aplicacion Movil en Flutter. El objetivo es proporcionar una solución funcional para que los usuarios organicen sus actividades diarias.

🚀 Tecnologías Utilizadas
Backend: NestJS, Node.js

Base de Datos: PostgreSQL

Frontend: Flutter

ORM: TypeORM

🛠️ Configuración e Instalación Local
Sigue estos pasos para ejecutar el proyecto localmente.

Backend (API REST)

1. Clonar el Repositorio

git clone https://github.com/DiegoF1311/proyecto-tareas.git

cd nombre-del-repo/server


2. Variables de Entorno
Crea un archivo .env en la raíz de la carpeta server y añade la configuración de tu base de datos y JWT.
---------------------------------
# Back
JWT_SECRET='algo-secreto'

JWT_EXPIRES_IN=1h

DATABASE_HOST=host

DATABASE_PORT=port

DATABASE_USER=user

DATABASE_PASSWORD=pass

DATABASE=nombre-bd


# Front
API_URL=urlapi

---------------------------------


3. Instalación de Dependencias
npm install


4. Ejecutar la Aplicación
npm run start:dev


La aplicación estará disponible en http://localhost:3000.

Frontend (Aplicación Móvil)

1. Navegar al Directorio del Proyecto

cd proyecto-tareas/mobile

3. Instalar Dependencias de Flutter
   
flutter pub get

5. Ejecutar la Aplicación
   
Asegúrate de tener un emulador o un dispositivo físico conectado.

flutter run

La aplicación móvil se ejecutará en el dispositivo seleccionado.

📜 Endpoints de la API
La API expone los siguientes endpoints para la gestión de usuarios y tareas.

# Autenticación (/auth)

| Método | Endpoint            | Descripción                                    |
| ------ | ------------------- | ---------------------------------------------- |
| POST   | `/auth/login`       | Login de usuario, retorna token                |
| GET    | `/auth/checkstatus` | Obtiene el perfil del usuario (requiere token) |

# Tareas (/tasks)

| Método | Endpoint     | Descripción                                 |
| ------ | ------------ | ------------------------------------------- |
| POST   | `/tasks`     | Crear una nueva tarea (requiere token)      |
| GET    | `/tasks/all` | Listar todas las tareas (sin autenticación) |
| GET    | `/tasks/:id` | Obtener tarea por ID                        |
| GET    | `/tasks`     | Obtener tareas del usuario autenticado      |
| PATCH  | `/tasks/:id` | Actualizar tarea por ID (requiere token)    |
| DELETE | `/tasks/:id` | Eliminar tarea por ID (requiere token)      |


🚧 Notas y Futuras Mejoras
Esta entrega se centra en la estructura del backend y la definición de la API. Sin embargo, se reconocen las siguientes áreas que no se completaron:

Lógica de Tareas (Front): La lógica interna para la gestión de tareas (CRUD) en el Front aún requiere ser implementada.

Despliegue: No se realizó el despliegue del backend. Se tenía planeado subirlo a Railway debido a su facilidad de uso y soporte para Node.js y bases de datos.


🧑‍💻 Autor
Nombre: Diego Alejandro Forero Espitia

Github: DiegoF1311

