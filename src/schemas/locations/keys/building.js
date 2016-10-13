import { values } from 'underscore';
import { isOneOf } from '../../schemaUtils';
import { VALID_BUILDINGS } from '../constants';
const isValidBuilding = (value) => isOneOf(value, Object.keys(VALID_BUILDINGS));

export default {
	type: String,
	validate: {
		validator: isValidBuilding,
		message: '"{VALUE}" is not a valid building. Please enter a building:\n' +
			values(VALID_BUILDINGS).join('\n- ')
	},
		required: false
};
