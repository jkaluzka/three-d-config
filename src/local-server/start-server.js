const Koa = require('koa');
const Router = require('koa-router');
const Cors = require('@koa/cors');
const fs = require('fs');
const app = new Koa();
const router = Router();

router.get('/models/:modelId/config', async (ctx) => {
  // by passing utf-8 we are getting content, not buffer
  const data = fs.readFileSync('./configs/config.json', 'utf-8');
  ctx.body = JSON.parse(data);
});

app.use(Cors());
app.use(router.routes());
console.log('listening on port 3000');
app.listen(3000);
