import { isLatLng } from '../../schemaUtils';

export default {
	type: Number,
	validate: {
		validator: isLatLng,
		message: '"{VALUE}" is not a valid latitude.'
	},
	required: false
};
