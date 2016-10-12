const isValidWeblink = (value) => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(value);

export default {
	type: String,
	validate: {
		validator: isValidWeblink,
		message: '"{VALUE}" is not a valid weblink. '
	},
	required: false
};
