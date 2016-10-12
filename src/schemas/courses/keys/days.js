import { Schema } from 'mongoose';
import { VALID_OCCURENCIES } from '../constants';

const isValidOccurency = (value) =>
	Object.keys(VALID_OCCURENCIES).some((occurency) => occurency === value);

export const daySchema = Schema({
	start: {
		type: Date,
		required: [ true, 'You did not provided a start Date object!' ]
	},
	end: {
		type: Date,
		required: [ true, 'You did not provided an end Date object!' ]
	},
	occurency: {
		type: String,
		validate: {
			validator: isValidOccurency,
			message: 'You did not provided a valid occurency. The following ' +
				'occurencies are supported:\n' +
				Object.values(VALID_OCCURENCIES).join('-\n')
		},
		required: true
	}
});

export default {
	type: [ daySchema ],
	required: false
};
