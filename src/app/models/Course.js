import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
	name: String,
	hometown: String,
});
export default mongoose.model('Course', Course);
