type CustomErrorType = {
	message: string;
	code: number;
}

class CustomError extends Error {
	static create(message: Partial<CustomErrorType> = {})  {
		const error = new Error()
		error.name = 'CustomError'
		Object.assign(error, message)
		return error
	}

	static log(error: Error): void {
		console.error(`ERROR ${error.message}`);
	}
}

export default CustomError
