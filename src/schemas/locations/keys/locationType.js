import { LOCATION_TYPES } from '../constants';
import { isOneOf } from '../../schemaUtils';

const isLocationType = (value) =>
	isOneOf(value, Object.keys(parseInt(LOCATION_TYPES, 10)));

export default {
	type: String,
	validate: {
		validator: isLocationType,
		message: 'The provided locationType "{VALUE}" is invalid. It has to ' +
			'be a string of one of the following value: \n' +
			Object.values(LOCATION_TYPES).join('\n- ')
	},
	required: false
};
