import mongoose from 'mongoose';
import { readdirSync } from 'fs';

const requireSchema = (schemaName) => require(`../schemas/${schemaName}`).default;

const models = {};
readdirSync(`.${__dirname}src/schemas`).forEach((fileName) => {
	if (fileName === 'index.js' || !fileName.includes('.js')) {
		return;
	}
	const modelName = /(.*)\.js$/.exec(fileName)[1];
	models[modelName] = mongoose.model(modelName, requireSchema(modelName));
});

export default models;
