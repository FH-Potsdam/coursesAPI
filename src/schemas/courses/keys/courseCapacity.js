const isValidCapacity = (value) => Boolean(value);

export default {
	type: Number,
	valitade: {
		validator: isValidCapacity,
		message: '"{VALUE}" is not a valid courseCapacity. Please enter a' +
			' number between 1 and 100'
	},
	required: false
};
