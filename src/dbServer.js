import mongoose from 'mongoose';
import logger from './utils/logger';

const my = {};

my.start = (db = 'test', host = 'localhost', port = 27017) => {
	const mongoDbUrl = `mongodb://${host}:${port}/${db}`;
	mongoose.connect(mongoDbUrl, () => {
		logger.log(`Listening to the Mongodb server "${mongoDbUrl}"`);
	});
};


export default {
	start(...args) {
		return my
			.start(...args);
	}
};
