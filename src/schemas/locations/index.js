import { Schema } from 'mongoose';
import building from './keys/building';
import cityName from './keys/cityName';
import courses from './keys/courses';
import floor from './keys/floor';
import fullName from './keys/fullName';
import latitude from './keys/latitude';
import locationType from './keys/locationType';
import longitude from './keys/longitude';
import postalCode from './keys/postalCode';
import roomNumber from './keys/roomNumber';
import streetName from './keys/streetName';
import streetNumber from './keys/streetNumber';
import teachers from './keys/teachers';

export default new Schema({
	building,
	cityName,
	courses,
	floor,
	fullName,
	latitude,
	locationType,
	longitude,
	postalCode,
	roomNumber,
	streetName,
	streetNumber,
	teachers
});
