import mongoose from 'mongoose';
import teachersSchema from '../schemas/teachers';
import coursesSchema from '../schemas/courses';
import locationsSchema from '../schemas/locations';

mongoose.Promise = global.Promise;

const formatResponse = (status, data) => [{
	status,
	data
}];

const formatMongoError = ({
	name,
	errors,
	message = 'Something wrong happened but we could not determinate the reason'
}) => ({
	type: name,
	messages: errors ?
		Object.keys(errors).map((errKey) =>
			`${errKey}: ${errors[errKey].message}`) : [message]
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
		read: curyCallback((reject, resolve, query) =>
			mongoose.model(modelName)
				.find()
				.populate('teachers locations courses')
				.limit((query.limit && parseInt(query.limit, 10)) || 10)
				.exec()
				.catch(reject)
				.then(resolve)),

		readById: curyCallback((reject, resolve, id) => // takes query as last argument
			mongoose.model(modelName)
				.findOne({ _id: id })
				.populate('teachers locations courses')
				.exec()
				.catch(reject)
				.then(resolve)),

		create: curyCallback((reject, resolve, query) => // takes model as last argument
			new Model(query).save()
				.catch(reject)
				.then(resolve)),

		delete: curyCallback((reject, resolve, id) => // takes query as last argument
			mongoose.model(modelName)
				.findOne({ _id: id })
				.remove()
				.catch(reject)
				.then(resolve)),

		update: curyCallback((reject, resolve, id, query) => // takes model as last argument
			mongoose.model(modelName)
				.findOne({ _id: id })
				.catch(reject)
				.then((response) => {
					if (query) {
						Object.assign(response, query);
					}
					response.save()
						.catch(reject)
						.then(resolve);
				}))
	};
};

export const teachersModel = createCrudHandlers('teachers', teachersSchema);
export const coursesModel = createCrudHandlers('courses', coursesSchema);
export const locationsModel = createCrudHandlers('locations', locationsSchema);
