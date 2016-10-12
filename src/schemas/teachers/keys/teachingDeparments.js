import { values } from 'underscore';
import { TEACHING_DEPARTMENTS } from '../constants';
import { isOneOf } from '../../schemaUtils';

const isADepartment = (value) =>
	isOneOf(value, Object.keys(TEACHING_DEPARTMENTS));

export default {
	type: String,
	validate: {
		validator: isADepartment,
		message: 'The provided teachingDeparment "{VALUE}" is invalid. It has to ' +
			'be a string of one of the following value: \n' +
			values(TEACHING_DEPARTMENTS).join('\n- ')
	},
	required: false
};
