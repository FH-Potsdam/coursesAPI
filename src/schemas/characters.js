import { Schema } from 'mongoose';

export default new Schema({
	firstName: String,
	lastName: String,
	gender: String,
	age: Number,
	picture: String,
	race: String,
	description: String,
	voices: [ {
		language: String,
		actor: { type: Schema.Types.ObjectId, ref: 'actors' }
	} ],
	actor: { type: Schema.Types.ObjectId, ref: 'actors' },
	quotes: [ { type: Schema.Types.ObjectId, ref: 'quotes' } ],
	apparitions: [ { type: Schema.Types.ObjectId, ref: 'movies' } ]
});
