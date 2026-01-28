# 🧩 Pokémon Fullstack Application

Aplicación fullstack desarrollada como prueba técnica, que consume la
**PokéAPI** desde el backend y expone un endpoint optimizado para ser
consumido por un frontend en **React + Vite**.

Incluye búsqueda optimizada, paginación, caché en el backend, caché en navegador y
arquitectura limpia siguiendo buenas prácticas.

------------------------------------------------------------------------

## 🚀 Demo

-   **Backend :** http://localhost:3001/api/pokemon
-   **Frontend:** http://localhost:5173/

------------------------------------------------------------------------

## 🧱 Arquitectura

    root/
    │
    ├── backend/
    │   └── src
    │       ├── cache/
    │       │   └── cache.js
    │       ├── routes/
    │       │   └── pokemon.routes.js
    │       ├── services/
    │       │   └── pokeapi.service.js
    │       ├── app.js
    │       └── server.js
    │
    └── frontend/
        └── vite-project/
            ├── src/
            │     ├── hooks/
            │     │   └── useDebounce.js
            │     ├── services/
            │     │   └── api.js
            │     ├── App.css
            │     └── App.jsx
            ├── public/
            ├── vite.config.js
            └── package.json

------------------------------------------------------------------------

## 🛠️ Tecnologías Utilizadas

### Backend

-   Node.js
-   Express.js
-   PokéAPI
-   Axios
-   CORS

### Frontend

-   React.js
-   Vite
-   JavaScript (ES6+)

------------------------------------------------------------------------

## ✨ Funcionalidades

-   🔍 Búsqueda de Pokémon
-   📄 Paginación
-   🧠 Caché en el backend
-   ⚡ Debouncing para optimizar llamadas
-   🧠 Caché en navegador
-   🌐 API intermedia

------------------------------------------------------------------------

## 🔌 API -- Backend

### Endpoint inicial

    GET http://localhost:3001/api/pokemon

### Endpoint de paginación

    GET http://localhost:3001/api/pokemon?&page=1&limit=20

### Query Params

  Parámetro   Descripción
  ----------- -----------------------
  page        Página actual
  limit       Resultados por página
  search      Búsqueda por nombre

### Respuesta de ejemplo

``` json
{
  "page": 1,
  "limit": 20,
  "total": 1000,
  "results": [
    {
      "id": 1,
      "name": "bulbasaur",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    }
  ]
}
```

------------------------------------------------------------------------

## 🌐 Frontend

### Endpoint inicial

     http://localhost:5173/


------------------------------------------------------------------------

## 🧪 Instalación Local

### Backend

``` bash
cd backend
npm install
npm start
```

### Frontend

``` bash
cd frontend/vite-project
npm install
npm run dev
```

------------------------------------------------------------------------

## ⚙️ Decisiones Técnicas

-   Backend intermedio para desacoplar el frontend
-   Debouncing para evitar llamadas innecesarias
-   Paginación desde backend
-   Caché en navegador y backend
-   Busqueda optimizada

------------------------------------------------------------------------

## 🔬 Pruebas de Integración

-   https://drive.google.com/file/d/1uG4nfgyGdIPd07T4Eg4WvOLskijeLSfZ/view?usp=sharing

------------------------------------------------------------------------

## 👤 Autor

Jonathan Gutierrez
