import express from 'express';
import modelsRoutes from './routes/modelsRoutes';
import genericError from './routes/genericError';
import logger from './utils/logger';

const apiServer = express();
const my = {};
const REST2CRUDMAP = {
	get: 'read',
	post: 'create',
	put: 'update',
	delete: 'delete'
};


my.initModelRoute = (routes, routeHandlers) => {
	Object.keys(REST2CRUDMAP).forEach((restActionName) => {
		const crudActionName = REST2CRUDMAP[restActionName];

		Object.keys(routes).forEach((routeType) => {
			const crudHandler = routeHandlers[routeType][crudActionName];
			apiServer[restActionName](routes[routeType], crudHandler);
		});
	});
};


my.initModelsRoutes = () => {
	Object.keys(modelsRoutes).forEach((routeName) => {
		const modelRoutes = {
			many: `/${routeName}/many`,
			one: `/${routeName}/one/(:uid)?`
		};
		const routeHandlers = modelsRoutes[routeName];

		my.initModelRoute(modelRoutes, routeHandlers);
	});

	return my;
};


my.initErrorRoute = () => {
	Object.keys(REST2CRUDMAP).forEach((restAction) => {
		apiServer[restAction]('*', genericError);
	});

	return my;
};


my.start = (host = 'localhost', port = 3000) => {
	apiServer.listen(port, () => {
		logger.log(`Server started on http://${host}:${port}`);
	});

	return my;
};


export default {
	start(...args) {
		return my
			.initModelsRoutes()
			.initErrorRoute()
			.start(...args);
	}
};
