const NodeCache = require('node-cache');

const cache = new NodeCache({
  stdTTL: 600 // 10 minutos
});

module.exports = cache;