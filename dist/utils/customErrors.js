"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = exports.NoContentError = void 0;
class NoContentError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 204;
    }
}
exports.NoContentError = NoContentError;
class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 403;
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}
exports.NotFoundError = NotFoundError;
class InternalServerError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 500;
    }
}
exports.InternalServerError = InternalServerError;
