import express from 'express';
import db from './mongodb/db.js';
import config from 'config-lite';
import chalk from 'chalk';
import session from 'express-session';
import router from './routes/index.js';
import connectMongo from 'connect-mongo';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const MongoStore = connectMongo(session);
app.use(session({
  name: config.session.name,//设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  resave: true,//强制更新 session
  cookie: config.session.cookie,
  saveUninitialized: false,// 设置为 false，强制创建一个 session，即使用户未登录
  store: new MongoStore({
    url: config.url
  })
}))

router(app);


app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});
