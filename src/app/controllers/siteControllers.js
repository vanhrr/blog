import Course from '../models/Course.js';
class homePage {
	show(req, res) {
		res.json(Course);
	}
}

export default new homePage();
