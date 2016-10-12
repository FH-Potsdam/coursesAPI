import mongoose from 'mongoose';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const requireSchema = (schemaName) => require(`../schemas/${schemaName}`).default;

const getDirectories = (srcpath) =>
	readdirSync(srcpath).filter((file) =>
		statSync(join(srcpath, file)).isDirectory());

const models = {};
getDirectories(`.${__dirname}src/schemas`).forEach((folderName) => {
	if (folderName.includes('.')) {
		return;
	}
	models[folderName] = mongoose.model(folderName, requireSchema(folderName));
});

export default models;
