import { isInLengthRange } from '../../schemaUtils';

const isValidName = (title) => isInLengthRange(title, 1, 1000);

export default {
	type: String,
	validate: {
		validator: isValidName,
		message: '"{VALUE}" is not a valid room name. Please enter a name ' +
			'between 1 and 1000 characters.'
	},
	required: [
		true,
		'The key roomName is required. Please provide it.'
	]
};
