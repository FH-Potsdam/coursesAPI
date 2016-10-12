export default {
	type: Number,
	validate: {
		validator: (value) => value <= 100,
		message: 'A course giving more than hundred credits? really?'
	},
	required: false
};
