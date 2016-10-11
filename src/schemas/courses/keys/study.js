import { isOneOf } from '../../schemaUtils';
import { SUPPORTED_STUDIES } from '../constants';

const texts = {
	failedValidation: 'The study "{VALUE}" is not supported yet. For know, ' +
		'the API supports only the following studies:\n' +
		SUPPORTED_STUDIES.join('\n- '),
	missingValue: 'The field study is required. Please provide it. The ' +
		'supported studies are:\n' + SUPPORTED_STUDIES.join('\n- ')
};

const isStudy = (value) =>
	isOneOf(value, Object.keys(SUPPORTED_STUDIES));

export default {
	type: String,
	validator: {
		validate: isStudy,
		message: texts.failedValidation
	},
	required: [ true, texts.missingValue ]
};
