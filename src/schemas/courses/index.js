import { Schema } from 'mongoose';
import beginDate from './keys/beginDate';
import beginYear from './keys/beginYear';
import courseCapacity from './keys/courseCapacity';
import credits from './keys/credits';
import days from './keys/days';
import description from './keys/description';
import endDate from './keys/endDate';
import incomWorkspaceId from './keys/incomWorkspaceId';
import locations from './keys/locations';
import semesterWeekHours from './keys/semesterWeekHours';
import study from './keys/study';
import studyCategoryId from './keys/studyCategoryId';
import studyCode from './keys/studyCode';
import studyField from './keys/studyField';
import studyStage from './keys/studyStage';
import studySubject from './keys/studySubject';
import summerSemester from './keys/summerSemester';
import teachers from './keys/teachers';
import title from './keys/title';

export default new Schema({
	beginDate,
	beginYear,
	courseCapacity,
	credits,
	days,
	description,
	endDate,
	incomWorkspaceId,
	locations,
	semesterWeekHours,
	study,
	studyCategoryId,
	studyCode,
	studyField,
	studyStage,
	studySubject,
	summerSemester,
	teachers,
	title
});
