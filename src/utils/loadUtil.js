import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export const getDirNames = (srcpath) =>
	readdirSync(srcpath).filter((file) =>
		statSync(join(srcpath, file)).isDirectory());

const requireAll = (r) => r.keys().forEach(r);

export const genericLoad = (fileName, path = './', expression = /.*/, deep = false) =>
	requireAll(require.context( path, deep, expression )(`./${fileName}`));
