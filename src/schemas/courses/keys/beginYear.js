import { isYear } from '../../schemaUtils';

export default {
	type: Number,
	validate: {
		validator: isYear,
		message: 'Whether "{VALUE}" is not a valid year or your live on ' +
			'another planet!'
	},
	required: true
};
