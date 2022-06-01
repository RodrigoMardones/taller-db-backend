### Proyecto base

para correr este proyecto es necesario contar con las siguientes variables de entorno contenidas en un .env

```env
PORT=4000
DB_NAME=defaultdb
DB_HOST=host_database
DB_DRIVER=dialect
DB_PASSWORD=password_database
DB_USER=user_database
DB_PORT=25060
NODE_ENV=development
DB_CONNECTION_URI="uri to database"
```

requiere de una conexion especifica para este caso, se puede mudar a cualquier adaptador de db, dependiendo del uso. para este caso se encuentra instalado el adaptador para postgres.

```json
{
  "build": "tsc -p .",
  "start": "npm run build && node dist/index",
  "start:dev": "nodemon -r dotenv/config src/index.ts",
  "start:build": "npm run build && node -r dotenv/config dist/index",
  "prettier-format": "prettier --config .prettierrc 'src/**/*.ts' --write"
}
```

o corer el archivo de docker-compose interno
