### Proyecto base

para correr este proyecto es necesario contar con las siguientes variables de entorno contenidas en un .env

```env
PORT=4000
NODE_ENV='development'
APP_NAME=BarraksBackend
SALT_CRYPT_CODE=12
DATABASE_URI=my_mongodb_url
DATABASE_NAME=myFirstDatabase
SECRET_KEY_JWT=myjwttoken
IMDB_URL=https://api.themoviedb.org/3
IMDB_API_KEY=74e2fd5ec77cedbc83c615a8358038c6
```

require de una api especifica para obtener informacion orientada a las peliculas.
una vez creado el .env puedes correr el proyecto con los comandos en el package.json

```json
{
  "build": "tsc -p .",
  "start": "npm run build && node dist/index",
  "start:dev": "nodemon -r dotenv/config src/index.ts",
  "start:build": "npm run build && node -r dotenv/config dist/index"
}
```

o corer el archivo de docker-compose interno
