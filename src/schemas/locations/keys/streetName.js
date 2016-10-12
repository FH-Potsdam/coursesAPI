import { isInLengthRange } from '../../schemaUtils';

const isValidStreetname = (title) => isInLengthRange(title, 1, 100);

export default {
	type: String,
	validate: {
		validator: isValidStreetname,
		message: '"{VALUE}" is not a valid street name. Please enter a number ' +
			'between 1 and 100 characters.'
	},
	required: false
};
