const isStudyCode = (value) => /^([1-3][1-6])(.+?(?=-))?(-)([A-Z]{1,3})$/g.test(value);

export default {
	type: String,
	validate: {
		validator: isStudyCode,
		message: 'The provided studyCode "{VALUE}" is not valid. It should' +
			' be something like 12FOKd-MG or 11At-Z'
	},
	required: [
		true,
		'A study code is required. Please provide one. i.e. 11EG-B'
	]
};
