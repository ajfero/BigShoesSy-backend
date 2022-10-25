# Api-rest Backend --> BigShoesSy

**About this app: Api-rest Backend** --> This is an Backend api-rest for project BigShoesSy.

# To initialize the application
Edite file ___.env__ with information of your database. after:
```bash
# Install dependecies
npm install

# Create tables
npx sequelize-cli db:migrate

# Created Seeders queries -> New data harcoded.
npx sequelize-cli db:seed:all
```

# App Construction and init App
- npm init  -> package.json
- Install dependecies
  - **dependencies**
    - express
    - dotenv
    - sequelize
    - mysql
    - jsonwebtoken
  - **devDependencies**
    - nodemon
    - sequelize-cli
- npm run start (nodemon serve)

## This is an app with structure based in Clean Architecture:
    project/
    │
    ├── src/ <------------------------------------- App Origin.
    │   │
    │   └── database/ <---------------------------- ORM Database.
    │   │   │    └── userStorage.js
    │   │   │    └── messageStorage.js
    │   │   │
    │   │   └── migrations/
    │   │   │    └── roleStore.js
    │   │   │    └── userStore.js
    │   │   │    └── userRoleStore.js
    │   │   │    └── messageStore.js
    │   │   │
    │   │   └── seeders/
    │   │        └── roleSeeder.js
    │   │        └── userRoleSeeder.js
    │   │
    │   └── controllers/
    │   │   └── userController.js
    │   │   └── messageController.js
    │   │
    │   └── models/
    │   │   └── User.js
    │   │   └── Role.js
    │   │   └── Messagel.js
    │   │
    │   └── middlelware/
    │   │    └── auth.js
    │   │    └── .js
    │   │
    │   └── routes/
    │   │    └── userRoute.js
    │   │    └── messageRoute.js
    │   │
    │   └── config/ <------------------------------ Config.
    │   │    └── database.js
    │   │    └── config.js
    │   │    └── index.js
    │   │
    │   └── public/ <------------------------------ Client.
    │   │     └── index.html
    │   │     └── styles.css
    │   │
    │   └── network/ <----------------------------- Network.
    │   │   └── response.js <-- Errors.
    │   │   └── routes.js   <-- Routes.
    │   │
    │   └── server.js <------- Server.
    │
    ├── node_modules/<---------------------------- Dependencies.
    │   └── express
    │   │   ├── body-parser
    │   │   └──
    │   └── dotenv

# Autentificación con JWT y Sequelize
Un ejemplo o boilerplate de autorización basada en JWT y Sequelize ORM de JavaScript con Roles (admin, user...ect) y políticas. Obviando lo de Express, Node, Sequelize CLI, MySQL (al ser ORM puedes utilizar Postgre, MariaDB, SQLite).

# Commands promp
```bash
# Init sequelize-cli for init the database-app.
npx sequelize-cli init

# Test database connection.
npx sequelize-cli db:migrate

# Create models with Seeder and Migrations
npx sequelize-cli model:generate --name user --attributes name:string, password:string, email:string

# Create models with Seeder and Migrations
npx sequelize-cli model:generate --name user --attributes name:string, password:string, email:string
```

# Resume
- Create **Server**
- Create **Database**
- Create **Connection**
- Create **Migrations**
- Create **Route**
- Create **Model**
- Create **Controller**
- Create **Manage data** (user, password, email)
- Create  **Jwt generate**