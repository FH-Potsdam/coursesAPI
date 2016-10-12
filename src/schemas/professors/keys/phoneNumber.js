const isValidPhoneNumber = (value) => / ^\+?[0-9\/\(\)\-\s]{0,30}$/g.test(value);

export default {
	type: String,
	validate: {
		validator: isValidPhoneNumber,
		message: '"{VALUE}" is not a valid PhoneNumber. Please enter a validPhoneNumber ' +
			'you can use (digits, "/", "()", "-" and " ")'
	},
		required: false
};
