import { isInLengthRange } from '../../schemaUtils';
import { FLOOR_NUMBERS } from '../constants';

const { MIN, MAX } = FLOOR_NUMBERS;
const isValidFloor = (value) => isInLengthRange(value, MIN, MAX);

export default {
	type: Number,
	validate: {
		validator: isValidFloor,
		message: '"{VALUE}" is not a valid floor. Please enter a floor ' +
			`between ${MIN} and ${MAX}`
	},
	required: false
};
