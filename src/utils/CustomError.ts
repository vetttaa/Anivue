class CustomError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'CustomError'
	}

	log(): void {
		console.error(`ERROR ${this.message}`);
	}
}

export default CustomError
