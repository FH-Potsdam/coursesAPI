const isValidEmailAdress = (value) => / \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b$/g.test(value);

export default {
	type: String,
	validate: {
		validator: isValidEmailAdress,
		message: '"{VALUE}" is not a valid building. Please enter a validEmailAdress ' +
			'something@something.some'
	},
		required: false
};
