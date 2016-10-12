const isValidImagelink = (value) => /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpg|gif|png|tiff)$/g.test(value);

export default {
	type: String,
	validate: {
		validator: isValidImagelink,
		message: '"{VALUE}" is not a valid imageLink. ' +
		'make sure it is, .jpg, .gif, .png or .tiff'
	},
	required: false
};
