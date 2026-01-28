# 🧩 Pokémon Fullstack Application

Aplicación fullstack desarrollada como prueba técnica, que consume la
**PokéAPI** desde el backend y expone un endpoint optimizado para ser
consumido por un frontend en **React + Vite**.

Incluye búsqueda optimizada, paginación, caché en navegador y
arquitectura limpia siguiendo buenas prácticas.

------------------------------------------------------------------------

## 🚀 Demo en Producción

-   **Frontend (Vercel):** https://TU-FRONTEND.vercel.app
-   **Backend (Render):** https://TU-BACKEND.onrender.com
-   **Endpoint principal:** `/api/pokemon`

> ⚠️ Nota: El backend está desplegado en el plan gratuito de Render, por
> lo que la primera petición puede tardar algunos segundos debido al
> *cold start*.

------------------------------------------------------------------------

## 🧱 Arquitectura

    root/
    │
    ├── backend/
    │   ├── index.js
    │   ├── routes/
    │   ├── services/
    │   └── package.json
    │
    └── frontend/
        └── vite-project/
            ├── src/
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

### Deploy

-   Render
-   Vercel

------------------------------------------------------------------------

## ✨ Funcionalidades

-   🔍 Búsqueda de Pokémon
-   📄 Paginación
-   ⚡ Debouncing para optimizar llamadas
-   🧠 Caché en navegador
-   🌐 API intermedia

------------------------------------------------------------------------

## 🔌 API -- Backend

### Endpoint

    GET /api/pokemon

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
-   Caché en navegador

------------------------------------------------------------------------

## 👤 Autor

Jonathan Gutierrez
