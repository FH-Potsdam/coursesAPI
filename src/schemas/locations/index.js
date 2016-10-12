import { Schema } from 'mongoose';
import { getKeyFromDir } from '../schemaUtils';

export default new Schema(getKeyFromDir('./keys'));
