# 🎮 Tienda de Videojuegos - Frontend (React)

## 📌 Descripción
Este es el frontend de la **Tienda de Videojuegos**, desarrollado con **React**. La aplicación permite a los usuarios explorar, comprar y gestionar videojuegos, mientras que los administradores pueden administrar los productos, categorías y usuarios del sistema. Se conecta con un backend en **Laravel** mediante una API REST.

## Link de acceso al repositorio del backend:
Repositorio: https://github.com/Therealdavi836/8bit-Emporium.git

## 🚀 Características
- 🔹 **Interfaz moderna y responsive** con React y Tailwind CSS.
- 🔹 **Gestión de usuarios**: Autenticación con JWT.
- 🔹 **Consumo de API REST** desde el backend en Laravel.
- 🔹 **Carrito de compras** con almacenamiento en el estado global.
- 🔹 **Dashboard de administración** para gestionar videojuegos y ventas.
- 🔹 **Rutas protegidas** según roles de usuario (cliente y administrador).

## 🛠️ Tecnologías Utilizadas
- **Framework**: React
- **Estado global**: Context API / Redux (según implementación)
- **Estilos**: Tailwind CSS
- **Autenticación**: JWT + Middleware
- **Gestión de dependencias**: Yarn / NPM
- **Conexión con API**: Axios / Fetch

## 📂 Estructura del Proyecto
```
📦 videogame-store-frontend
 ┣ 📂 src
 ┃ ┣ 📂 components (Componentes reutilizables)
 ┃ ┣ 📂 pages (Páginas principales)
 ┃ ┣ 📂 services (Consumo de API)
 ┃ ┣ 📂 context (Gestión de estado global)
 ┣ 📜 .env
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## ⚡ Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/videogame-store-frontend.git
   cd videogame-store-frontend
   ```
2. Instala las dependencias:
   ```bash
   yarn install # o npm install
   ```
3. Crea el archivo `.env` y configura la URL de la API:
   ```env
   REACT_APP_API_URL=http://localhost:8000/api
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   yarn start # o npm start
   ```
5. Accede a la aplicación en `http://localhost:3000`

## 👤 Roles y Accesos
- **Administrador**: Acceso al dashboard de gestión.
- **Cliente**: Puede explorar videojuegos y realizar compras.

## 📜 Licencia
Este proyecto está bajo la **Licencia MIT**.
- El proyecto fue desarrollado y presentado para los docentes
- **Docente encargado**: Valentina Tabares Morales
- **Docente auxiliar**: Jose Albeiro Montes Gil
---
💡 *Contribuciones y mejoras son bienvenidas.* 🚀

