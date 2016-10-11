
// TODO: Implement validation
const isValidFirstName = (value) => Boolean(value);

export default {
	type: String,
	validate: {
		validator: isValidFirstName,
		message: '"{VALUE}" is not a valid firstName.'
	},
	required: [ true, 'No first name was provided!' ]
};
