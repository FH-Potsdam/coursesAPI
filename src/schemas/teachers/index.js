import { Schema } from 'mongoose';
import courses from './keys/courses';
import emailAdress from './keys/emailAdress';
import firstName from './keys/firstName';
import gender from './keys/gender';
import imageAdress from './keys/imageAdress';
import lastName from './keys/lastName';
import locations from './keys/locations';
import phoneNumber from './keys/phoneNumber';
import teacherGroups from './keys/teacherGroups';
import teachingDeparments from './keys/teachingDeparments';
import webAdress from './keys/webAdress';

export default new Schema({
	courses,
	emailAdress,
	firstName,
	gender,
	imageAdress,
	lastName,
	locations,
	phoneNumber,
	teacherGroups,
	teachingDeparments,
	webAdress
});
