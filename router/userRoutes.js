const KoaRouter = require('koa-router');
const { userController } = require('../controllers');

const userRouter = new KoaRouter();

userRouter.get('/:id', userController.getById);
userRouter.get('/', userController.getAll);

userRouter.post('/', (ctx) => {
  ctx.body = 'post User';
});

userRouter.delete('/:id', (ctx) => {
  const { id } = ctx.params;
  ctx.body = `delete User ${id}`;
});

module.exports = userRouter;
