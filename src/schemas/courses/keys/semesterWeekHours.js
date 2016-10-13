import { isInLengthRange } from '../../schemaUtils';
import { SEMESTER_WEEK_HOURS } from '../constants';

const { MIN, MAX } = SEMESTER_WEEK_HOURS;
const isValideSemesterWeekHour = (value) =>
	isInLengthRange(value, MIN, MAX);

export default {
	type: Number,
	validate: {
		validator: isValideSemesterWeekHour,
		message: '"{VALUE}" is not a valid semesterWeekHours. Please enter' +
			` a number between ${MIN} and ${MAX}`,
	},
	required: false
};
