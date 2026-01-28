const express = require('express');
const cors = require('cors');

const pokemonRoutes = require('./routes/pokemon.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pokemon', pokemonRoutes);

module.exports = app;