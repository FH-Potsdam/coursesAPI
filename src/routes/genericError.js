
export default (req, res) => {
	res.status(404);
	res.json({
		status: 'error',
		message: 'Invalid request url'
	});
};
