import mongoose from 'mongoose';

async function connect() {
	try {
		await mongoose.createConnection('mongodb://localhost:27017/blog_db');
		console.log('Connect success!');
	} catch (error) {
		console.log('Connect fail!');
	}
}
export default connect();
