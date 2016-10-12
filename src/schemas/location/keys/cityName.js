import { isName } from '../../schemaUtils';

export default {
	type: String,
	validate: {
		validator: isName,
		message: '"{VALUE}" is not a valid city Name.'
	},
		required: false
};
