import { values } from 'underscore';
import { GENDER } from '../constants';
import { isOneOf } from '../../schemaUtils';

const isAGender = (value) =>
	isOneOf(value, Object.keys(GENDER));

export default {
	type: String,
	validate: {
		validator: isAGender,
		message: 'The provided gender "{VALUE}" is invalid. It has to ' +
			'be a string of one of the following value: \n' +
			values(GENDER).join('\n- ')
	},
	required: false
};
