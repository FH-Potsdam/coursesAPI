import { isInLengthRange } from '../../schemaUtils';
import { CREDITS } from '../constants';

const { MIN, MAX } = CREDITS;
const isValidCredits = (value) => isInLengthRange(value, MIN, MAX);

export default {
	type: Number,
	validate: {
		validator: isValidCredits,
		message: `"{VALUE}" is an invalid credit number. Please enter a value` +
			` between ${MIN} and ${MAX}`
	},
	required: false
};
