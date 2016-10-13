import { isInLengthRange } from '../../schemaUtils';
import { STREET_NAME } from '../constants';

const { MIN, MAX } = STREET_NAME;
const isValidStreetName = (value) =>
	!/\d/.test(value) && isInLengthRange(value, MIN, MAX);

export default {
	type: String,
	validate: {
		validator: isValidStreetName,
		message: '"{VALUE}" is not a valid street name. Please enter a string' +
			` from ${MIN} to ${MAX} characters long without the street number.` +
			' For street names containing number, please write them in words.'
	},
	required: false
};
