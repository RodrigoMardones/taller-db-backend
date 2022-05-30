import CorsMiddleware from './cors/cors.middleware';
import ErrorMiddleware from './error/error.middleware';
import LoggerMiddleware from './logger/logger.middleware';

export const middlewares = [
    CorsMiddleware,
    ErrorMiddleware,
    LoggerMiddleware
];