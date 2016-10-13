import { isInLengthRange } from '../../schemaUtils';
import { POSTAL_CODE } from '../constants';

const { MIN, MAX } = POSTAL_CODE;
const isValidPostalCode = (title) => isInLengthRange(String(title), MIN, MAX);

export default {
	type: Number,
	validate: {
		validator: isValidPostalCode,
		message: '"{VALUE}" is not a valid postal code. Please enter a number ' +
			`between ${MIN} and ${MAX} characters.`
	},
	required: false
};
