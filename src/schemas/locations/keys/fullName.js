import { isName } from '../../schemaUtils';

export default {
	type: String,
	validate: {
		validator: isName,
		message: '"{VALUE}" is not a valid room name.'
	},
	required: [
		true,
		'The key fullName is required. Please provide it.'
	]
};
