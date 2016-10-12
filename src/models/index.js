import mongoose from 'mongoose';
import teachersSchema from '../schemas/teachers';
import coursesSchema from '../schemas/courses';
import locationsSchema from '../schemas/locations';

const createCrudHandlers = (modelName, model) => {
	mongoose.model(modelName, model);
	return {
		read: (query, cb) => {
			mongoose.model(modelName)
				.find()
				.limit(parseInt(query.limit, 10) || 10)
				.catch((err) => cb(err, null))
				.then((response) => cb(null, response));
		},
		readById: (id, query, cb) => {
			mongoose.model(modelName)
				.findOne({ _id: id })
				.catch((err) => cb(err, null))
				.then((response) => cb(null, response));
		},
		create: () => {}, // (query, model, cb) => {},
		delete: () => {}, // (id, query, cb) => {},
		update: () => {} // (id, query, model, cb) => {},
	};
};

export const teachersModel = createCrudHandlers('teachers', teachersSchema);
export const coursesModel = createCrudHandlers('courses', coursesSchema);
export const locationsModel = createCrudHandlers('locations', locationsSchema);
