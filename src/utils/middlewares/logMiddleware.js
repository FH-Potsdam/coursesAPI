import logger from '../logger';
export default (req, res, next) => {
	const { method, url, query } = req;
	const baseUrl = url.substr(0, (url.indexOf('?'))) || url;
	logger.log('');
	logger.log('-------------- NEW REQUEST --------------');
	logger.log(`METHOD: ${method}`);
	logger.log(`PATH: ${baseUrl}`);
	logger.log(`QUERY: ${JSON.stringify(query)}`);
	logger.log('-----------------------------------------');
	logger.log('');

	next();
};
