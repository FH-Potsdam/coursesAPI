import logMiddleware from './logMiddleware';
import bodyParser from 'body-parser';

export default [
	logMiddleware,
	bodyParser.json()
];
