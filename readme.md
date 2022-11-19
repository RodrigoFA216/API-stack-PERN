# Requerimientos

- NodeJS 16.15 o superior
- PostgreSQL 13 o superior

## Herramientas de desarrollo

- Git
- VsCode
  - react/redux Snippets
  - material icons
  - thunder client
- Navegador web

# Dependencias
## Desarrollo
- Nodemon (2.0.20): Es una dependencia que nos permite reiniciar el servidor con cada cambio que se guarde al código sin necesidad de detener y volver a iniciar el servidor (se hace de forma automática)

## Funcionales
- Cors (2.8.5): Es una dependencia que nos permite como desarrolladores eficientar la comunicación entre dos o más servidores por medio de un canal provisto
- Dotenv (16.0.3): Es una dependencia que nos permite usar variables de entorno en un archivo .env para evitar la divulgación de credenciales y aumentar la seguridad de los datos dentro del despliegue de nuestra aplicación.
- Express (4.18.2): Es una dependencia que nos permite ejecutar el codigo de JS escrito y ser interpretado como codigo del servidor
- Morgan (1.10.0): Es una dependencia que nos permite ver por consola las peticiones al servidor y los códigos de estado que este devuelve
- PG (8.8.0): Es una dependencia llamada ORM y nos permite conectar con las bases de datos, esta en especifico facilita la conexión con PostgreSQL


# Ejecutar proyecto

(naturalmente ejecutar primero install de node para crear la carpeta node_modules)
- En una ventana de comandos dirigirse a la ubicación de la carpeta o abrir una terminal en la carpeta del proyecto.
- Para desarrollo escribir el comando:
~~~
>npm run dev
~~~
Crea en la carpeta raíz un archivo de nombre .env que contenga los siguientes datos:

~~~
  DB_USER = <>
  DB_PASSWORD = <>
  DB_HOST = <>
  DB_PORT = <>
  DB_DATABASE = <>
~~~
Reemplazando las <> por:

Usuario de la base de datos
Password del usuario
Host donde está dicha conexión
Puerto de la conexión
Base de datos a utilizar


# Configuración del Back End

~~~
C:\Users\jorge\Desktop\Proyecto CACEI>node --version
v16.15.1

C:\Users\jorge\Desktop\Proyecto CACEI>npm --version
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
8.11.0

C:\Users\jorge\Desktop\Proyecto CACEI>npx --version
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
8.11.0

C:\Users\jorge\Desktop\Proyecto CACEI>npm init -y
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
Wrote to C:\Users\jorge\Desktop\Proyecto CACEI\package.json:

{
  "name": "proyecto-cacei",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}



C:\Users\jorge\Desktop\Proyecto CACEI>npm i express morgan cors
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

added 64 packages, and audited 65 packages in 6s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\jorge\Desktop\Proyecto CACEI>npm i nodemon -D
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

added 32 packages, and audited 97 packages in 23s

10 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\jorge\Desktop\Proyecto CACEI>npm i nodemon -D
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

up to date, audited 97 packages in 2s

10 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

PS C:\Users\jorge\Desktop\Proyecto CACEI> npm i dotenv
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

added 1 package, and audited 113 packages in 2s

10 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
~~~
