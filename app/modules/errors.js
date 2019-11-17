/** Main Application errors handler for extends by other application errors */
class AppError extends Error {
    /** @param {*} args Error message */
    constructor(...args) { // eslint-disable-line no-useless-constructor
        super(...args);
        this.name = this.constructor.name.toString();
        this.prodMessage = '';
    }

    /** @return {{code:Number, data: {error:String}}} Object with data for application response */
    toResponse() {
        const self = this;

        return {
            code: self.code,
            data: {
                error: self.message,
            },
        };
    }
}

/** Application errors when get bad request */
class BadRequest extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(...args);
        this.appError = true;
        this.code = 400;
        this.name = `${super.name}: ${this.constructor.name.toString()}`;
        Error.captureStackTrace(this, this.constructor);
    }
}

/** Application unauthorized errors */
class Unauthorized extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(...args);
        this.appError = true;
        this.code = 401;
        this.name = `${super.name}: ${this.constructor.name.toString()}`;
        Error.captureStackTrace(this, this.constructor);
    }
}

/** Application forbidden errors */
class Forbidden extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(...args);
        this.appError = true;
        this.code = 403;
        this.name = `${super.name}: ${this.constructor.name.toString()}`;
        Error.captureStackTrace(this, this.constructor);
    }
}

/** Application errors when no data is found */
class NotFound extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(...args);
        this.appError = true;
        this.code = 404;
        this.name = `${super.name}: ${this.constructor.name.toString()}`;
        Error.captureStackTrace(this, this.constructor);
    }
}

/** Application errors when something not allowed */
class NotAllowed extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(...args);
        this.appError = true;
        this.code = 405;
        this.name = `${super.name}: ${this.constructor.name.toString()}`;
        Error.captureStackTrace(this, this.constructor);
    }
}

/** Application errors when Conflict */
class Conflict extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(...args);
        this.appError = true;
        this.code = 409;
        this.name = `${super.name}: ${this.constructor.name.toString()}`;
        Error.captureStackTrace(this, this.constructor);
    }
}

/** Application errors when Unprocessable Entity */
class UnprocessableEntity extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(...args);
        this.appError = true;
        this.code = 422;
        this.name = `${super.name}: ${this.constructor.name.toString()}`;
        Error.captureStackTrace(this, this.constructor);
    }
}

/** Application errors when get internal error */
class Internal extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(...args);
        this.appError = true;
        this.code = 500;
        this.name = `${super.name}: ${this.constructor.name.toString()}`;
        Error.captureStackTrace(this, this.constructor);
    }
}

/** Application errors when get internal error */
class NotImplemented extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(...args);
        this.appError = true;
        this.code = 501;
        this.name = `${super.name}: ${this.constructor.name.toString()}`;
        Error.captureStackTrace(this, this.constructor);
    }
}

/** Application errors when get bad response from services */
class BadResponse extends AppError {
    /** @param {*} args Error message */
    constructor(...args) {
        super(args[0].description);
        this.appError = false;
        const code = args[0].code.toString();
        this.code = code.substring(3);
    }
}

module.exports = {
    BadResponse,
    BadRequest,
    Unauthorized,
    Forbidden,
    NotFound,
    NotAllowed,
    Conflict,
    UnprocessableEntity,
    Internal,
    NotImplemented,
    byCode: {
        400: BadRequest,
        401: Unauthorized,
        403: Forbidden,
        404: NotFound,
        405: NotAllowed,
        409: Conflict,
        422: UnprocessableEntity,
        500: Internal,
        501: NotImplemented,
    },
};
