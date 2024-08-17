# Parking project

Proyecto creado para implementar un modelo de negocio de un sistema para gestionar el parking de automoviles y motocicletas de estacionamiento.

## Tecnoclogias usadas

- Backend: java
- FrontEnd: React

## Estructura del Proyecto

###### esta es la idea

1. Frontend (React)

   - Pages:

     - Home: Información general del estacionamiento, con enlaces a las diferentes  
        secciones.
     - Users Management: Página para gestionar los usuarios registrados (propietarios de
       vehículos).
     - Vehicles Management: Página para gestionar los vehículos registrados.
     - Parking Transactions: Página para gestionar las entradas y salidas de vehículos,
       calcular tarifas y registrar pagos.
     - Reports: Página para visualizar reportes (e.g., ingresos, ocupación del
       estacionamiento).

   - Components:

     - Header: Barra de navegación con enlaces a las diferentes páginas.
     - Footer: Información del contacto y derechos de autor.
     - UserForm: Formulario para registrar o editar información de los usuarios.
     - VehicleForm: Formulario para registrar o editar información de los vehículos.
     - ParkingTransactionForm: Formulario para gestionar la entrada/salida de vehículos
       y calcular tarifas.
     - TransactionList: Lista para mostrar todas las transacciones realizadas en el  
       estacionamiento.
     - State Management: Puedes usar Context API o Redux para manejar el estado de la  
       aplicación.

     - UI Framework: Puedes utilizar Material-UI o Bootstrap para darle un estilo
       moderno y consistente a tu aplicación.

2. Backend (Spring Boot)

   - Entities:

     - User: Representa a los propietarios de los vehículos.
     - Vehicle: Representa los vehículos estacionados.
     - ParkingTransaction: Registra las transacciones del estacionamiento,
       incluyendo tiempo de entrada, tiempo de salida, tarifa calculada, etc.

   - Repositories:

     - UserRepository: Para realizar operaciones CRUD sobre los usuarios.
     - VehicleRepository: Para realizar operaciones CRUD sobre los vehículos.
     - ParkingTransactionRepository: Para registrar y gestionar las transacciones del
       estacionamiento.

   - Services:

     - UserService: Lógica de negocio para la gestión de usuarios.
     - VehicleService: Lógica de negocio para la gestión de vehículos.
     - ParkingTransactionService: Lógica de negocio para manejar las transacciones y
       calcular las tarifas.

   - Controllers:

   - UserController: Endpoints para la gestión de usuarios.
   - VehicleController: Endpoints para la gestión de vehículos.
   - ParkingTransactionController: Endpoints para gestionar las transacciones de  
     estacionamiento.

   - Security:
   - Implementa Spring Security para manejar la autenticación y autorización, protegiendo
     así las rutas según los roles de usuario (e.g., admin, user).

- Calculo de Tarifas:

  Puedes calcular las tarifas basándote en el tiempo de entrada y salida de los vehículos. Las tarifas pueden depender del tipo de vehículo o del tiempo de permanencia.

- Reportes y Estadísticas:

  Implementa reportes que muestren las estadísticas de ocupación y los ingresos del estacionamiento. Puedes hacer esto mediante consultas SQL personalizadas o utilizando las capacidades de JPA.
