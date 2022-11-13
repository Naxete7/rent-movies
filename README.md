# pruebaTecnicaPeliculas

Prueba Tecnica 4 base de datos peliculas y series

En esta prueba técnica comenzamos a programar en la parte backend, para ello hemos tenido que instalar node en nuestro equipo, para poder utilizarlo en nuestro terminal de Visual Studio.

La base de datos la gestionaremos con el Mysql Workbench, y la alojaremos en nuestro contenedor de DOCKER.

Después dn nuestro terminal hemos instalado las dependencias para poder comenzar el proyecto. EL comando utilizado es: npm install.

Tras modificar el archivo /config/config.json con los datos de nuestro servidor mysql (username, password, database y host), ejecutaremos los siguientes comandos para instalar todas las dependencias necesarias para crear nuestro proyecto con express.
npm i sequelize sequelize-cli mysql mysql2 express nodemon

![Captura de pantalla 2022-11-06 203948](https://user-images.githubusercontent.com/109297564/200196104-8712cf66-44a5-4c73-bc2f-1a75a8d3ee75.jpg)

En primer lugar crearemos un index.js donde crearemos la base del proyectto y sera desde donde conectaremos con el servidor y con la base de datos

![Captura de pantalla 2022-11-06 220534](https://user-images.githubusercontent.com/109297564/200195437-175876bd-fe34-485d-b7e1-5e245c647b1a.jpg)

A partir de aqui y comenzaremos a crear lo que sera nuestra base de datos.
Crearemos los modelos que una vez los migremos a nuestra base de datos seran las tablas donde alojaremos todos nuestros datos (seeders).

![Captura de pantalla 2022-11-06 221720](https://user-images.githubusercontent.com/109297564/200195645-bf7c611d-e4d0-4da3-86a3-37b7f16c1efd.jpg)

![Captura de pantalla 2022-11-06 221748](https://user-images.githubusercontent.com/109297564/200195647-d402c04a-06b1-4564-8a8c-1722eada8129.jpg)

Como vemos en las imagenes de arriba, por un lado esta la carpeta models con todos los modelos creados dentro. Y en la segunda imagen vemos un ejemplo de lo que seria un modelo, donde también colocamos las relaciones que hay entre las tablas.

Una vez ya creados los modelos pasaremos a migrarlos a la base datos, donde se convertiran en las tablas.

![Captura de pantalla 2022-11-05 114513](https://user-images.githubusercontent.com/109297564/200197400-7a8d6694-ce6c-4b7a-97c7-18e9a41ce844.jpg)

Como vemos en la imagen en las migraciones encontraremos lo que habra dentro de la tabla, en este caso solo tiene un id, pero también podriamos encontrar, nombre, dirección, titulo de pelicula, etc

Una vez migradas las tablas comprobamos como quedan las relaciones en nuestra base de datos.

![Captura de pantalla 2022-11-06 194411](https://user-images.githubusercontent.com/109297564/200195942-4512e1ad-ac5e-4a1d-b525-a713314aacb4.jpg)

Una vez comprobado que nuestras relaciones estan bien estructuradas, pasaremos a rellenar las tablas de las bases de datos a traves de los seeders, los cuales realizaremos desde el VS, y luego volcaremos a nuestra base de datos con el comando npx sequelize-cli db:seed:all

![Captura de pantalla 2022-11-06 204024](https://user-images.githubusercontent.com/109297564/200196070-d7d498f7-3a67-43f9-8948-ce4a64745c74.jpg)

Aquí podemos ver un ejemplo de los datos que hemos introducido a traves de los seeders, en nuestra tabla de movies.

Una vez ya completa la base de datos comenzaremos a realizar los ENDPOINTS, los cuales nos ayudaran a realizar las consultas que queramos en nuestra base de datos.
Para ello crearemos un archivo router.js, que será donde crearemos una ruta para cada una de las tablas de la base de datos a las que queramos acceder

![Captura de pantalla 2022-11-06 223754](https://user-images.githubusercontent.com/109297564/200196597-7ffbb58d-54c1-4ece-8e23-06bb94b0d93c.jpg)

Para lograr acceder a a estas rutas, crearemos una carpeta de views donde estaran los archivos que gestionaran las rutas y los endpoints que apuntan a estas rutas.

![Captura de pantalla 2022-11-06 224156](https://user-images.githubusercontent.com/109297564/200196742-00a12c84-3cb8-4ece-bd9f-15b650bba5fa.jpg)

Y para que tanto el archivo router.js como los views funcionen, tenemos qque crear las funciones de cada endpoint, y para ello crearemos los controllers, donde crearemos un archivo para cada tabla en la que queramos buscar(movies, series, usuario...)

![Captura de pantalla 2022-11-06 224408](https://user-images.githubusercontent.com/109297564/200196855-36f68492-f417-471e-b250-d336fe041920.jpg)

Una vez ya realizado todo esto y para comprobar que nuestra base de datos funciona correctamente, y podemos utilizar los endpoints para buscar lo que queramos utilizaremos el programa Postman para realizar esas consultas.

![Captura de pantalla 2022-11-06 194411](https://user-images.githubusercontent.com/109297564/200196983-6de91375-5281-4e07-8437-02bf247e862f.jpg)

Por ultimo y para finalizar el proyecto, utilizaremos la pagina railway, para subir nustra base de datos en producción y asi poder acceder a ella con facilidad.
