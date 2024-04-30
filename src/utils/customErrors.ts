export class NoContentError extends Error {
    public statusCode: number;
    constructor (message: string) {
        super(message);
        this.statusCode = 204;
    }
}
export class BadRequestError extends Error {
    public statusCode: number;
    constructor (message: string) {
        super(message);
        this.statusCode = 400;
    }
}
export class UnauthorizedError extends Error {
    public statusCode: number;
    constructor (message: string) {
        super(message);
        this.statusCode = 401;
    }
}

export class ForbiddenError extends Error {
    public statusCode: number;
    constructor (message: string) {
        super(message);
        this.statusCode = 403;
    }
}

export class NotFoundError extends Error {
    public statusCode: number;
    constructor (message: string) {
        super(message);
        this.statusCode = 404;
    }
}

export class InternalServerError extends Error {
    public statusCode: number;
    constructor (message: string) {
        super(message);
        this.statusCode = 500;
    }
}