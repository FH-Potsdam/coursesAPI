// TODO: implement validation
const isValideSemesterWeekHour = (value) => Boolean(value);

export default {
	type: Number,
	validate: {
		validator: isValideSemesterWeekHour,
		message: '"{VALUE}" is not a valid semesterWeekHours. Please enter' +
			' a number between 1 and 30',
	},
	required: false
};
