import config from 'config';
import { values } from 'underscore';
import './models';
import apiServer from './apiServer';
import dbServer from './dbServer';

const apiConfig = {
	host: process.env.API_HOST || config.get('api').host,
	port: process.env.PORT || config.get('api').port
};

const dbConfig = {
	name: process.env.DB_NAME || config.get('database').name,
	host: process.env.DB_HOST || config.get('database').host,
	port: process.env.DB_PORT || config.get('database').port,
	user: process.env.DB_USER || config.get('database').user,
	psw: process.env.DB_PSW || config.get('database').psw
};

dbServer.start(...values(dbConfig));
apiServer.start(...values(apiConfig));
