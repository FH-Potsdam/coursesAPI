import express from 'express';
import expressCrud from 'express-crud';
import logger from './utils/logger';
import middlewares from './utils/middlewares';
import { coursesModel, locationsModel, teachersModel } from './models'

const apiServer = express();
const my = {};


my.initMiddlewares = (server, middlewares) => {
	middlewares.forEach((middleware) => server.use(middleware));
	return my;
};


my.initModelsRoutes = (server) => {
	expressCrud(server, {
		formatResponse(response) {
			const { data, status } = response[0];
			return {
				status,
				[status === 'success' ? 'data' : 'error']: data
			};
		}
	});

	server.crud('courses', coursesModel);
	server.crud('locations', locationsModel);
	server.crud('teachers', teachersModel);

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
			.initMiddlewares(apiServer, middlewares)
			.initModelsRoutes(apiServer)
			.start(...args);
	}
};
