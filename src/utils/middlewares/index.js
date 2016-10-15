import logMiddleware from './logMiddleware';
import bodyParser from 'body-parser';

export default [
	logMiddleware,
	(req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		return next();
	},
	bodyParser.json()
];
