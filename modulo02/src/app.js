// const express = require('express');
// const routes = require('./routes');

import express from 'express'; // after run => yarn add sucrase nodemon -D
import routes from './routes'; // after run => yarn add sucrase nodemon -D

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
