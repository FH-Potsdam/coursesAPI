import mongoose from 'mongoose';
import { getDirNames, genericLoad } from '../utils/loadUtil';
import { resolve } from 'path';

const requireSchema = (schemaName) =>
	genericLoad(schemaName, resolve(__dirname, '../schemas/'));

const models = {};
getDirNames(`.${__dirname}src/schemas`).forEach((folderName) => {
	if (folderName.includes('.')) {
		return;
	}
	models[folderName] = mongoose.model(folderName, requireSchema(folderName));
});

export default models;
