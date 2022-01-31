const Koa = require('koa');

const compress = require('koa-compress');
const router = require('./router');

class App {
  constructor() {
    this.app = new Koa();
    this.setUp();
    this.routes();
  }

  setUp() {
    this.app.use(compress());
  }

  routes() {
    this.app.use(router.routes());
  }
}

module.exports = App;
