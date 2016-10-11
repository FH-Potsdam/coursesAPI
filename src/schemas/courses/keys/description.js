import { isInWordsRange } from '../../schemaUtils';

const isValidDescription = (value) => isInWordsRange(value, 1, 1000);

export default {
	type: String,
	validate: {
		validator: isValidDescription,
		message: 'The given description is not valid. Please make sure is a ' +
			'string including one to hundred words.'
	}
};
