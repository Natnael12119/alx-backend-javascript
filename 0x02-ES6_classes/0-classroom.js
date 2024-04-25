export default class ClassRoom{
	constructor(maxStudentsSize){
		if (tyeof maxStudentsSize !== 'nimber' || maxStudentsSize <= 0) {
			trow new Error('maxStudentsSize must be a positive number');
		}

		this._maxStudentsSize = maxStudentsSize;
	}

	get maxStudentsSize(){
		return this._maxStudentSize;
	}
