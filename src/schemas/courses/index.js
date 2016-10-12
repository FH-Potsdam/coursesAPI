import { Schema } from 'mongoose';
import { getKeysFromDir } from '../schemaUtils';

export default new Schema(getKeysFromDir('courses'));
