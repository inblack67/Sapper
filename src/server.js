import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

import express from 'express';
import 'colors';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
)

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`.green.bold);
});

// polka() // You can also use Express
// 	.use(
		// compression({ threshold: 0 }),
		// sirv('static', { dev }),
		// sapper.middleware()
// 	)
// 	.listen(PORT, err => {
// 		if (err) console.log('error', err);
// 		console.log(`Server started on port ${PORT}`.green.bold);
// 	});
