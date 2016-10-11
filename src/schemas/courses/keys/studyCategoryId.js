import range from 'underscore/range';
import { isOneOf } from '../../schemaUtils';

const isStudyCategoryId = (value) => isOneOf(value, range(1, 6));

export default {
	type: Number,
	validate: {
		validator: isStudyCategoryId,
		message: 'The provided value "{VALUE}" needs to be a single digit ' +
			'of value '
	},
	required: false
};
