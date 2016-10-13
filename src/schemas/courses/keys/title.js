import { isInLengthRange } from '../../schemaUtils';
import { TITLE } from '../constants';

const { MIN, MAX } = TITLE;
const isValidTitle = (title) => isInLengthRange(title.length, MIN, MAX);

export default {
	type: String,
	validate: {
		validator: isValidTitle,
		message: '"{VALUE}" is not a valid title. Please enter a title ' +
			`between ${MIN} and ${MAX} characters.`
	},
	required: [
		true,
		'The key title is required. Please provide it.'
	]
};
