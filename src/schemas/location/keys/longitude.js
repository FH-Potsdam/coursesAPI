import { isLonLan } from '../../schemaUtils';

export default {
	type: Number,
	validate: {
		validator: isLonLan,
		message: '"{VALUE}" is not a valid longitude.'
	},
};
