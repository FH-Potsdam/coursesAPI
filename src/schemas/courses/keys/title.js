import { isInLengthRange } from '../../schemaUtils';

const isValidTitle = (title) => isInWordsRange(value, 1, 100);

export default {
	type: String,
	validate: {
		validator: isValidTitle,
		message: '"{VALUE}" is not a valid title. Please enter a title ' +
			'between 1 and 100 characters.'
	},
	required: [
		true,
		'The key title is required. Please provide it.'
	]
};
