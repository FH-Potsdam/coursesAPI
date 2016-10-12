import { range } from 'underscore';
import { isOneOf } from '../../schemaUtils';

const isStudyStage = (value) => isOneOf(value, range(1, 3));

export default {
	type: Number,
	validate: {
		validator: isStudyStage,
		message: 'The provided value "{VALUE}" needs to be a single digit ' +
			'of value 1 (Base studies or the first half of a Bachelor ' +
			'programm), 2 (Advanced studies or the second half of a ' +
			'Bachelor programm) or 3 (A master degree programm)'
	},
	required: false
};
