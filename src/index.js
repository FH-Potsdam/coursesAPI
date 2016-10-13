import config from 'config';
import './models';
import apiServer from './apiServer';
import dbServer from './dbServer';

const api = config.get('api');
const database = config.get('database');
dbServer.start(database.name, database.host, database.port);
apiServer.start(api.host, api.port);
