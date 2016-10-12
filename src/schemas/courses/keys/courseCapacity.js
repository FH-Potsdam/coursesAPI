import { CAPACITY } from '../constants';
import { isInLengthRange } from '../../schemaUtils';

const { MIN, MAX } = CAPACITY;
const isValidCapacity = (value) =>
	isInLengthRange(value, MIN, MAX);

export default {
	type: Number,
	valitade: {
		validator: isValidCapacity,
		message: '"{VALUE}" is not a valid courseCapacity. Please enter a' +
			' number between 1 and 100'
	},
	required: false
};
