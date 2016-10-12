<import { isInLengthRange } from '../../schemaUtils';

const isValidPostalCode = (title) => isInLengthRange(String(title), 1, 8);

export default {
	type: Number,
	validate: {
		validator: isValidPostalCode,
		message: '"{VALUE}" is not a valid postal code. Please enter a number ' +
			'between 1 and 8 characters.'
	},
};
