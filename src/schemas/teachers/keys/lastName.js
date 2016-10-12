import { isName } from '../../schemaUtils';

export default {
	type: String,
	validate: {
		validator: isName,
		message: '"{VALUE}" is not a valid lastName.'
	},
	required: [ true, 'No first name was provided!' ]
};
