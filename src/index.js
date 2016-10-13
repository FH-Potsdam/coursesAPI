import config from 'config';
import './models';
import apiServer from './apiServer';
import dbServer from './dbServer';

const api = config.get('api');
const database = config.get('database');
dbServer.start(database.name, database.host, database.port, database.user, database.psw);
apiServer.start(api.host, api.port);
