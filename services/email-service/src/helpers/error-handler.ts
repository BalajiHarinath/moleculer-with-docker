import { ZodError } from 'zod';
import { ErrorResponse } from "../types/error.handler.types";

export default function errorHandler(err: any): ErrorResponse{
    if (err instanceof ZodError) {
        console.log('inside zod error');
        
        return {
            success: false,
            error: {
                message: err.issues[0].message,
                code: 400,
                type: 'INVALID_INPUT'
            },
            statusCode: 400,
        }
    }    
    return{
        success: false,
        error: {
            message: err.message || 'An unexpected error occurred',
            code: err.code,
            type: err.type || 'INTERNAL_ERROR'
        },
        statusCode: err.code || 500,
    }
}