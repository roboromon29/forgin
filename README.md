# Forgin APP

La aplicación de consta de dos módulos más la base de datos que se encuentra en MongoDB

# Database

De momento se debe crear la base de datos manual
DB:Forgin
    document: users
    e.g: forgin.users

versión utilizada: MongoDB 4.2.8 Community

# Backend
En backend está desarrollado en Nodejs, y se encuentra en forgin-backend/ una vez clonada y descargada la solución debe abrir su herramienta de terminal y se debe ir a la ruta de descarga y ejecutar el comando: 

```bash
npm start
e.g: C:\Angular\forgin-backend>npm start
```

Actualmente se está ejecutando en el puerto 5069, por lo que el backend estará disponible en la dirección http://localhost:5069 

# Frontend
El front end se encuentra en la carpeta forgin-app/, por lo que se debe abrir su herramienta de terminal y dirigirse a esta carpeta en la ruta descargada, una vez ahí se debe ejecutar el comando: 

```bash
npm serve --port 2000
el puerto es opcional.

e.g: C:\Angular\forgin-app>ng serve --port 2000
```
