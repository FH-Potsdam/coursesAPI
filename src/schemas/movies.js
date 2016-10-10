import { Schema } from 'mongoose';

export default new Schema({
	title: String,
	date: Date,
	officialWebsite: String,
	characters: [ { type: Schema.Types.ObjectId, ref: 'characters' } ]
});
