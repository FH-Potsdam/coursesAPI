import config from 'config';
import { values } from 'underscore';
import './models';
import apiServer from './apiServer';
import dbServer from './dbServer';

const api = config.get('api');
const database = config.get('database');
dbServer.start(...values(database));
apiServer.start(...values(api));
