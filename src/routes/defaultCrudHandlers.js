import mongoose from 'mongoose';
import { NOT_IMPLEMENTED, NOT_FOUND, OK } from 'http-status-codes';

const DEFAULT_MAX_LIMIT = 10;
const method2actionMap = {
	PUT: 'modified',
	GET: 'retrieved',
	DELETE: 'deleted',
	POST: 'added'
};


const getModelNameByUrl = (url) => url.split('/')[1];

const notImplementedHandler = (req, res) => {
	const modelName = getModelNameByUrl(req.url);

	res.status(NOT_IMPLEMENTED);
	res.json({
		status: 'failure',
		message: `Cannot ${req.method} ${modelName} yet. Not implemented.`
	});
};

const errorHandler = (err, req, res) => {
	res.status(NOT_FOUND);
	res.json({
		status: 'failure',
		message: `No ${getModelNameByUrl(req.url)} found. ${err.message}`
	});
};

const getSingleSuccessMessage = (method, type, id) =>
	`Succefully ${method2actionMap[method]} the '${type}' document with the id ${id}`;

const getMultipleSuccessMessage = (method, type, amount) =>
	`Succefully ${method2actionMap[method]} ${amount} '${type}' documents.`;

const getSuccessObject = (req, data) => {
	const modelName = getModelNameByUrl(req.url);
	const message = data.length ?
		getMultipleSuccessMessage(req.method, modelName, data.length) :
		getSingleSuccessMessage(req.method, modelName, req.params.uid);

	return {
		status: 'success',
		message,
		data
	};
};

const sucessHandler = (response, req, res) => {
	res.status(OK);
	res.json(getSuccessObject(req, response));
};

export default {
	createCrudHandlers(customHandlers) {
		return Object.assign(
			{},
			{
				create: notImplementedHandler,
				read: notImplementedHandler,
				update: notImplementedHandler,
				delete: notImplementedHandler
			},
			customHandlers
		);
	},


	createDefaultMultipleReadHandler(req, res) {
		const modelName = getModelNameByUrl(req.url);
		mongoose.model(modelName)
			.find()
			.limit(parseInt(req.query.limit, 10) || DEFAULT_MAX_LIMIT)
			.catch((err) => errorHandler(err, req, res))
			.then((response) => sucessHandler(response, req, res));
	},


	createDefaultSingleReadHandler(req, res) {
		const modelName = getModelNameByUrl(req.url);
		mongoose.model(modelName)
			.findOne({ _id: req.params.uid })
			.catch((err) => errorHandler(err, req, res))
			.then((response) => sucessHandler(response, req, res));
	},


	createDefaultMultipleCreateHandler(req, res) {
		const modelName = getModelNameByUrl(req.url);
		mongoose.model(modelName)
			.find()
			.limit(parseInt(req.query.limit, 10) || DEFAULT_MAX_LIMIT)
			.catch((err) => errorHandler(err, req, res))
			.then((response) => sucessHandler(response, req, res));
	},


	createDefaultSingleCreateHandler(req, res, model) {
		const document = new model(req.query);
		document.save()
			.catch((err) => errorHandler(err, req, res))
			.then((response) => sucessHandler(response, req, res));
	}
};
