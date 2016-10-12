const isValidFloor = (value) => /^[0-9][0-9]?$/g.test(value);

export default {
	type: Number,
	validate: {
		validator: isValidFloor,
		message: '"{VALUE}" is not a valid floor. Please enter a floor ' +
			'between 1 and 100.'
	},

};
