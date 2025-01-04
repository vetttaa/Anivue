interface CustomErrorType extends Omit<Error, 'name'> {
  message: string
  code?: number
  name?: string
}

class CustomError extends Error {
  static _error: CustomErrorType = {
    message: '',
    name: this.name,
  };

  static create(message: CustomErrorType) {
    Object.assign(this._error, message);
    return this;
  }

  static log(): void {
    // eslint-disable-next-line
    console.log(`ERROR ${this._error.message}`)
  }

  static error() {
    console.error(`ERROR ${this._error.message}`);
  }
}

export default CustomError;
