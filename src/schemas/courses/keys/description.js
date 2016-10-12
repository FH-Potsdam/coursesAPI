import { isInWordsRange } from '../../schemaUtils';
import { DESCRIPTION } from '../constants';

const { MIN, MAX } = DESCRIPTION;
const isValidDescription = (value) => isInWordsRange(value, MIN, MAX);

export default {
	type: String,
	validate: {
		validator: isValidDescription,
		message: 'The given description is not valid. Please make sure is a ' +
			`string including from ${MIN} to ${MAX} words.`
	}
};
