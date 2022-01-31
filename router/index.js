const KoaRouter = require('koa-router');
const personRouter = require('./personRoutes');
const userRouter = require('./userRoutes');

const router = new KoaRouter();

router.use('/user', userRouter.routes());
router.use('/person', personRouter.routes());

module.exports = router;
