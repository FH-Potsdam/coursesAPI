// TODO: Implement validation
const isStudyCode = (value) => Boolean(value);

export default {
	type: String,
	validate: {
		validator: isStudyCode,
		message: 'The provided studyCode "{VALUE}" is not valid. It should' +
			' be something like 12FOKd-MG or 11At-Z'
	},
	required: false
};
