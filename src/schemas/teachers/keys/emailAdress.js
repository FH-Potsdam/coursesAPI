import { isValidEmailAdress } from '../../schemaUtils';

export default {
	type: String,
	validate: {
		validator: isValidEmailAdress,
		message: '"{VALUE}" is not a valid building. Please enter a validEmailAdress ' +
			'something@something.some'
	},
		required: false
};
