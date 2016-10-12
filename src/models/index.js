import mongoose from 'mongoose';
import teachers from '../schemas/teachers';
import courses from '../schemas/courses';
import locations from '../schemas/locations';

export default {
	teachers: mongoose.model('teachers', teachers),
	courses: mongoose.model('courses', courses),
	locations: mongoose.model('locations', locations),
};
