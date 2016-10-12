import express from 'express';
import expressCrud from 'express-crud';
import bodyParser from 'body-parser';
import logger from './utils/logger';
import { coursesModel, locationsModel, teachersModel } from './models'

const apiServer = express();
const my = {};


my.initModelsRoutes = (server) => {
	// server.use(bodyParser.urlencoded({ extended: false }))
	server.use(bodyParser.json())
	expressCrud(server, {
		formatResponse: (result) => ({
			timestamp: Date.now(),
			data: result
		})
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
			.initModelsRoutes(apiServer)
			.start(...args);
	}
};
