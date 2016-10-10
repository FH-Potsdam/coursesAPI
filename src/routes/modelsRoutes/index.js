import { readdirSync } from 'fs';

const requireRoute = (routeName) => require(`./${routeName}`).default;

const routes = [];
readdirSync(`.${__dirname}src/routes/modelsRoutes`).forEach((fileName) => {
	if (fileName === 'index.js' || !fileName.includes('.js')) {
		return;
	}
	const routeName = /(.*)\.js$/.exec(fileName)[1];
	routes[routeName] = requireRoute(routeName);
});


export default routes;
