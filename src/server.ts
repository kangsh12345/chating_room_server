import cors from 'cors';
import express, { Application } from 'express';
import session from 'express-session';

import routes from './routes';
import sequelize from './sequelize';
import socket from './sokect';

const FileStore = require('session-file-store')(session);

const app: Application = express();

const sessionMiddleware = session({
  secret: 'cacaonibs',
  saveUninitialized: true,
  cookie: { secure: false },
  resave: false,
  store: new FileStore(),
});

app.use(sessionMiddleware);
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });

app.use('/', routes);

const server = app.listen(8000, () => {
  console.log('start');
});

socket(server, app, sessionMiddleware);
