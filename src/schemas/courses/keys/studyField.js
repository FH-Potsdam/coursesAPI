import { STUDY_FIELDS } from '../constants';
import { isOneOf } from '../../schemaUtils';

const isStudyField = (value) => isOneOf(value, Object.keys(STUDY_FIELDS));

export default {
	type: String,
	validate: {
		validator: isStudyField,
		message: 'The provided studyField "{VALUE}" is invalid. It has to ' +
			'be a string of one of the following value: \n' +
			Object.values(STUDY_FIELDS).join('\n- ')
	},
	required: false
};
