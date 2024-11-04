import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.set('views', __dirname + '/resources/views');
app.use(express.static('../public'));
app.use(morgan('tiny'));

import newsRouter from './routes/newsRoute.js';

import homePage from './routes/siteRoute.js';

import db from './config/db/index.js';

app.use('/news', newsRouter);
app.use('/', homePage);

app.listen(port, () => {
	console.log(`Server runs on port ${port}`);
});
