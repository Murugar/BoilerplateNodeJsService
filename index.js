const express = require('express');

const getVersion = require('./service/version');

const getName = require('./service/name');

const createServer = () => {
  const app = express();

  app.use(express.json());

  app.get(
    '/version',
    getVersion
  );

  app.get(
    '/',
    getName
  );

  /* eslint-disable-next-line no-unused-vars */
  app.use((err, req, res, next) => res.status(500).json(err));

  return app;
};

// True if called directly from terminal
if (require.main === module) {
  createServer().listen(process.env.PORT || 8000);
}

module.exports = () => createServer();
