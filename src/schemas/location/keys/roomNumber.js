import { isInLengthRange } from '../../schemaUtils';

const isValidRoomNumber = (title) => isInLengthRange(String(title), 1, 4);

export default {
	type: Number,
	validate: {
		validator: isValidRoomNumber,
		message: '"{VALUE}" is not a valid room number. Please enter a number ' +
			'between 1 and 4 characters.'
	},
		required: false
};
