import mongoose from 'mongoose';
import teachersSchema from '../schemas/teachers';
import coursesSchema from '../schemas/courses';
import locationsSchema from '../schemas/locations';

mongoose.Promise = global.Promise;

const formatResponse = (status, response) => ({
	status,
	[status === 'success' ? 'data' : 'error']: response
});
const formatMongoError = ({ name, errors = [] }) => ({
	type: name,
	messages: Object.keys(errors).map((errKey) =>
		`${errKey}: ${errors[errKey].message}`)
});
const curyResolve = (cb) => (response) =>
	cb(null, formatResponse('success', response));
const curyReject = (cb) => (error) =>
	cb(null, formatResponse('error', formatMongoError(error)));
const curyCallback = (niceCb) => (...args) => {
	const cb = args[args.length - 1];
	const resolve = curyResolve(cb);
	const reject = curyReject(cb);
	niceCb(reject, resolve, ...args);
};

const createCrudHandlers = (modelName, model) => {
	const Model = mongoose.model(modelName, model);
	return {
		read: curyCallback((reject, resolve, query) => {
			mongoose.model(modelName)
				.find()
				.limit(parseInt(query.limit, 10) || 10)
				.catch(reject)
				.then(resolve);
		}),
		readById: curyCallback((reject, resolve, id) => { // takes query as last argument
			mongoose.model(modelName)
				.findOne({ _id: id })
				.catch(reject)
				.then(resolve);
		}),
		create: curyCallback((reject, resolve, query) => { // takes model as last argument
			const newEntry = new Model(query);
			newEntry.save((err, updatedEntry) => {
				if (err) { return reject(err); }
				return resolve(updatedEntry);
			});
		}),
		delete: curyCallback((reject, resolve, id) => { // takes query as last argument
			mongoose.model(modelName)
				.findOne({ _id: id })
				.remove()
				.catch(reject)
				.then(resolve);
		}),
		update: curyCallback((reject, resolve, id, query) => { // takes model as last argument
			mongoose.model(modelName)
				.findOne({ _id: id })
				.catch(reject)
				.then((response) => {
					if (query) {
						Object.assign(response, query);
					}
					response.save()
						.catch(reject)
						.then(resolve)
				});
		}),
	};
};

export const teachersModel = createCrudHandlers('teachers', teachersSchema);
export const coursesModel = createCrudHandlers('courses', coursesSchema);
export const locationsModel = createCrudHandlers('locations', locationsSchema);
