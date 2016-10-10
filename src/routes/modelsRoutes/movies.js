import defaultCrudHandlers from '../defaultCrudHandlers';

export default {
	one: defaultCrudHandlers.createCrudHandlers({
		read: defaultCrudHandlers.createDefaultSingleReadHandler
	}),
	many: defaultCrudHandlers.createCrudHandlers({
		read: defaultCrudHandlers.createDefaultMultipleReadHandler
	})
};
