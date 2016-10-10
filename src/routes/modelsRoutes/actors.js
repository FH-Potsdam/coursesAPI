import crudHandlers from '../defaultCrudHandlers';
import models from '../../models';

export default {
	one: crudHandlers.createCrudHandlers({
		create: (req, res) => crudHandlers.createDefaultSingleCreateHandler(req, res, models.actors),
		read: crudHandlers.createDefaultSingleReadHandler
	}),
	many: crudHandlers.createCrudHandlers({
		read: crudHandlers.createDefaultMultipleReadHandler
	})
};
