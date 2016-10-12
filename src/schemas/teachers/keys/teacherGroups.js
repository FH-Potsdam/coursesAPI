import { values } from 'underscore';
import { TEACHER_GROUP } from '../constants';
import { isOneOf } from '../../schemaUtils';

const isATeacherGroup = (value) =>
	isOneOf(value, Object.keys(TEACHER_GROUP));

export default {
	type: String,
	validate: {
		validator: isATeacherGroup,
		message: 'The provided teachingGroup "{VALUE}" is invalid. It has to ' +
			'be a string of one of the following value: \n' +
			values(TEACHER_GROUP).join('\n- ')
	},
	required: false
};
