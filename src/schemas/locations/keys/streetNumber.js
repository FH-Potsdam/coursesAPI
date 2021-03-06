import { isInLengthRange } from '../../schemaUtils';
import { STREET_NUMBERS } from '../constants';

const { MIN, MAX } = STREET_NUMBERS;
const isValidRoomNumber = (value) => isInLengthRange(String(value), MIN, MAX);

export default {
	type: Number,
	validate: {
		validator: isValidRoomNumber,
		message: '"{VALUE}" is not a valid room number. Please enter a number ' +
			`between ${MIN} and ${MAX} characters.`
	},
	required: false
};
