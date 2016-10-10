import { Schema } from 'mongoose';

export default new Schema({
	content: String,
	date: Date,
	apparition: { type: Schema.Types.ObjectId, ref: 'movies' },
	author: { type: Schema.Types.ObjectId, ref: 'characters' }
});
