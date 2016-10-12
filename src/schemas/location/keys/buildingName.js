const isValidBuilding = (value) => /^\b(LW)?\b(HG)?\b(D)?\b(SP)?\b(CT)?\b(H3)?\b(H1)?\b(H3)?\b(H4)?\b(H5)?\b(IBZ)?$?$/g.test(value);

export default {
	type: String,
	validate: {
		validator: isValidBuilding,
		message: '"{VALUE}" is not a valid building. Please enter a building ' +
			'LW, D, HG, SP, CT, H3, H1, H3, IBZ, H4, H5'
	},

};
