# pruebaTecnicaPeliculas

Prueba Tecnica 4 base de datos peliculas y series

En esta prueba técnica comenzamos a programar en la parte backend, para ello hemos tenido que instalar node en nuestro equipo, para poder utilizarlo en nuestro terminal de Visual Studio.

La base de datos la gestionaremos con el Mysql Workbench, y la alojaremos en nuestro contenedor de DOCKER.

Después dn nuestro terminal hemos instalado las dependencias para poder comenzar el proyecto. EL comando utilizado es: npm install.

Tras modificar el archivo /config/config.json con los datos de nuestro servidor mysql (username, password, database y host), ejecutaremos los siguientes comandos para instalar todas las dependencias necesarias para crear nuestro proyecto con express.
npm i sequelize sequelize-cli mysql mysql2 express nodemon

![Captura de pantalla 2022-11-06 203948](https://user-images.githubusercontent.com/109297564/200196104-8712cf66-44a5-4c73-bc2f-1a75a8d3ee75.jpg)

![Captura de pantalla 2022-11-15 162305](https://user-images.githubusercontent.com/109297564/201957583-9e60c4b7-e450-457e-96c6-a947b0e72396.jpg)
En esta última imagen podemos ver todas las dependencias instaladas para el correcto funcionamiento de nuestro proyecto.

En primer lugar crearemos un index.js donde crearemos la base del proyecto y será desde donde conectaremos con el servidor y con la base de datos
![Captura de pantalla 2022-11-15 161855](https://user-images.githubusercontent.com/109297564/201957834-a89baac7-1b02-47f2-b862-f90759584bda.jpg)

A partir de aqui y comenzaremos a crear lo que sera nuestra base de datos.
Crearemos los modelos que una vez los migremos a nuestra base de datos seran las tablas donde alojaremos todos nuestros datos (seeders).

![Captura de pantalla 2022-11-23 100355](https://user-images.githubusercontent.com/109297564/203507282-57603dee-0365-4f30-bb54-c733dfad2509.jpg)

![Captura de pantalla 2022-11-06 221748](https://user-images.githubusercontent.com/109297564/200195647-d402c04a-06b1-4564-8a8c-1722eada8129.jpg)

Como vemos en las imagenes de arriba, por un lado esta la carpeta models con todos los modelos creados dentro. Y en la segunda imagen vemos un ejemplo de lo que seria un modelo, donde también colocamos las relaciones que hay entre las tablas.

Una vez ya creados los modelos pasaremos a migrarlos a la base datos, donde se convertiran en las tablas.

![Captura de pantalla 2022-11-23 095915](https://user-images.githubusercontent.com/109297564/203506625-abab228b-f744-4e03-b8df-2733c1d2d33e.jpg)

Como vemos en la imagen en las migraciones encontraremos lo que habra dentro de la tabla, en este caso solo tiene un id, pero también podriamos encontrar, nombre, titulo de pelicula, etc

Una vez migradas las tablas comprobamos como quedan las relaciones en nuestra base de datos.
Una vez comprobado que nuestras relaciones estan bien estructuradas, pasaremos a rellenar las tablas de las bases de datos a traves de los seeders, los cuales realizaremos desde el VS, y luego volcaremos a nuestra base de datos con el comando npx sequelize-cli db:seed:all

![Captura de pantalla 2022-11-06 204024](https://user-images.githubusercontent.com/109297564/200196070-d7d498f7-3a67-43f9-8948-ce4a64745c74.jpg)

Aquí podemos ver un ejemplo de los datos que hemos introducido a traves de los seeders, en nuestra tabla de movies.

Una vez ya completa la base de datos comenzaremos a realizar los ENDPOINTS, los cuales nos ayudaran a realizar las consultas que queramos en nuestra base de datos.
Para ello crearemos un archivo router.js, que será donde crearemos una ruta para cada una de las tablas de la base de datos a las que queramos acceder

![Captura de pantalla 2022-11-15 162735](https://user-images.githubusercontent.com/109297564/201958727-d360255f-4993-4eb4-8be2-d24eab4606d3.jpg)

Para lograr acceder a a estas rutas, crearemos una carpeta de views donde estaran los archivos que gestionaran las rutas y los endpoints que apuntan a estas rutas.

![Captura de pantalla 2022-11-13 120756](https://user-images.githubusercontent.com/109297564/201518666-9ac5f627-1f91-48c6-a997-462564b5b3b7.jpg)

Y para que tanto el archivo router.js como los views funcionen, tenemos que crear las funciones de cada endpoint, y para ello crearemos los controllers, donde crearemos un archivo para cada tabla en la que queramos buscar(movies, series, usuario...)

![Captura de pantalla 2022-11-15 162854](https://user-images.githubusercontent.com/109297564/201958993-586ebfe7-6bd3-410b-a40c-338b13e1c0d0.jpg)

ENDPOINTS REALIZADOS

**##End-points CRUD para peliculas**

router.get('/', MovieController.getAll);
_**Mostrar todas las películas**_

router.get('/:id', MovieController.getById);
_**Mostrar películas por Id**_

router.get('/title/:title', MovieController.getByTitle);
_**Mostrar películas por título**_

router.get('/rank/:rank', MovieController.getByRank);
_**Mostrar películas por ranking**_

router.put('/:id', MovieController.update);
_**Modificar una película**_

router.delete('/', MovieController.deleteAll);
_**Borrar todas las películas**_

router.delete('/:id', MovieController.delete);
_**Borrar una película**_

**##End-points CRUD para series**

router.get('/', SerieController.getAll);
_**Mostrar todas las series**_

router.get('/:id', SerieController.getById);
_**Mostrar series por Id**_

router.get('/title/:title', SerieController.getByTitle);
_**Mostrar series por titulo**_

router.get('/rank/:rank', SerieController.getTopSerie);
_**Mostrar series por ranking**_

router.get('/theater/:theater', SerieController.getSerieTheater);
_**Mostrar series que se hayan hecho en el teatro**_

router.get('/cinema/:cinema', SerieController.getSerieCinema);
_**Mostrar series que se hayan hecho en el cine**_

router.get('/episode\*7\*days/:espisode_7_days', SerieController.get7Days)
**Mostrar series que estrenen capítulo en los proximos 7 dias**

router.put('/:id', SerieController.update);
_**Modificar una serie**_

router.delete('/', SerieController.deleteAll);
_**Borrar todas las series**_

router.delete('/:id', SerieController.delete);
_**Borrar una serie**_

**##ENDPOINTS de alquileres**

router.post('/movie', RentController.RentMovie)
(Pasamos por el body {"usuarioId":9,
"articleId":5
})
_**Alquilar una película**_

router.post('/serie', RentController.RentSerie)
(Pasamos por el body {"usuarioId":9,
"articleId":5
})
_**Alquilar una serie**_

router.get('/', RentController.getAll)
_**Todos los Alquileres**_

**##ENDPOINTS de los usuarios**

router.get("/", UsuarioController.getAll);
_**Mostrar todos los usuarios**_

router.get("/usuarios/:email", UsuarioController.getUsuarioByEmail);
_**Mostrar usuarios por mail**_

**##ENDPOINTS de autentificación**

_**login y registro**_

router.post('/signin', AuthController.signIn); **LOGIN**
(para poder logear y comprobar que el usuario esta registrado en nuestra base de datos, le pasaremos por body:

{
"email": "mapes@gmail.com",
"password":"mapsea"
}

)

router.post('/signup', AuthController.signUp); **REGISTRO DE UN USUARIO NUEVO**
(para poder crear un nuevo usuario, le pasamos por body un objeto Json con los siguientes datos:
{"nombre":"Alex Lopez",
"email": "alexlopez@gmail.com",
"password":"alex123",
})
Una vez ya realizado todo esto y para comprobar que nuestra base de datos funciona correctamente, y podemos utilizar los endpoints para buscar lo que queramos utilizaremos el programa Postman para realizar esas consultas.

![Captura de pantalla 2022-11-15 163034](https://user-images.githubusercontent.com/109297564/201959412-1b0c8d1a-3f35-40ba-8fbd-7aafc62002ed.jpg)

Por ultimo y para finalizar el proyecto, utilizaremos la pagina railway, para subir nustra base de datos y asi poder acceder a ella con facilidad.
Para ello cambiaremos el archivo config.json poniendo el puerto, el host, y la database que nos dara la pagina de Railway

![Captura de pantalla 2022-11-15 161957](https://user-images.githubusercontent.com/109297564/201957158-c758d57f-eb76-4aa0-95ad-7f39fd9831cd.jpg)

Y por último en estas dos imágenes vemos como quedaria nuestra base de datos en railway.
![Captura de pantalla 2022-11-15 163127](https://user-images.githubusercontent.com/109297564/201959930-72a3f41b-7ba2-4c3d-96e7-848622802ac2.jpg)
![Captura de pantalla 2022-11-23 100451](https://user-images.githubusercontent.com/109297564/203507576-024fe85b-67b9-40e1-bb28-daff988155ae.jpg)

Para finalizar dejamos, los comandos básicos, y los ENDPOINTS realizados para poder realizar el proyecto

COMANDOS BÁSICOS

npm init
npm install
npm update
npm run dev
npm run start

npm install cors jsonwebtoken bcrypt
sequelize model:generate --name user --attributes name:string, password:string, email:string
sequelize db:create
sequelize db:migrate

sequelize db:migrate:undo
sequelize db:migrate:undo:all

sequelize seed:generate --name demo-user
sequelize db:seed:all
sequelize db:seed:undo
sequelize db:seed:undo:all

ENDPOINTS

**##End-points CRUD para peliculas**

router.get('/', MovieController.getAll);
_**Mostrar todas las películas**_

router.get('/:id', MovieController.getById);
_**Mostrar películas por Id**_

router.get('/title/:title', MovieController.getByTitle);
_**Mostrar películas por título**_

router.get('/rank/:rank', MovieController.getByRank);
_**Mostrar películas por ranking**_

router.put('/:id', MovieController.update);
_**Modificar una película**_

router.delete('/', MovieController.deleteAll);
_**Borrar todas las películas**_

router.delete('/:id', MovieController.delete);
_**Borrar una película**_

**##End-points CRUD para series**

router.get('/', SerieController.getAll);
_**Mostrar todas las series**_

router.get('/:id', SerieController.getById);
_**Mostrar series por Id**_

router.get('/title/:title', SerieController.getByTitle);
_**Mostrar series por titulo**_

router.get('/rank/:rank', SerieController.getTopSerie);
_**Mostrar series por ranking**_

router.get('/theater/:theater', SerieController.getSerieTheater);
_**Mostrar series que se hayan hecho en el teatro**_

router.get('/cinema/:cinema', SerieController.getSerieCinema);
_**Mostrar series que se hayan hecho en el cine**_

router.get('/episode\*7\*days/:espisode_7_days', SerieController.get7Days)
**Mostrar series que estrenen capítulo en los proximos 7 dias**

router.put('/:id', SerieController.update);
_**Modificar una serie**_

router.delete('/', SerieController.deleteAll);
_**Borrar todas las series**_

router.delete('/:id', SerieController.delete);
_**Borrar una serie**_

**##ENDPOINTS de alquileres**

router.post('/movie', RentController.RentMovie)
(Pasamos por el body {"usuarioId":9,
"articleId":5
})
_**Alquilar una película**_

router.post('/serie', RentController.RentSerie)
(Pasamos por el body {"usuarioId":9,
"articleId":5
})
_**Alquilar una serie**_

router.get('/', RentController.getAll)
_**Todos los Alquileres**_

**##ENDPOINTS de los usuarios**

router.get("/", UsuarioController.getAll);
_**Mostrar todos los usuarios**_

router.get("/usuarios/:email", UsuarioController.getUsuarioByEmail);
_**Mostrar usuarios por mail**_

**##ENDPOINTS de autentificación**

_**login y registro**_

router.post('/signin', AuthController.signIn); **LOGIN**
(para poder logear y comprobar que el usuario esta registrado en nuestra base de datos, le pasaremos por body:

{
"email": "mapes@gmail.com",
"password":"mapsea"
}

)

router.post('/signup', AuthController.signUp); **REGISTRO DE UN USUARIO NUEVO**
(para poder crear un nuevo usuario, le pasamos por body un objeto Json con los siguientes datos:
{"nombre":"Alex Lopez",
"email": "alexlopez@gmail.com",
"password":"alex123",
})
