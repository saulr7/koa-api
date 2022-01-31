const KoaRouter = require('koa-router');

const personRouter = new KoaRouter();

personRouter.get('/', (ctx) => {
  ctx.body = 'get Person';
});

personRouter.post('/', (ctx) => {
  ctx.body = 'post Person';
});

module.exports = personRouter;
