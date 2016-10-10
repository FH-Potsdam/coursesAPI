import { Schema } from 'mongoose';

export default new Schema({
	firstName: String,
	lastName: String,
	birthDate: Date,
	picture: String,
	characters: [ { type: Schema.Types.ObjectId, ref: 'characters' } ],
	apparitions: [ { type: Schema.Types.ObjectId, ref: 'movies' } ]
});
