module.exports = {
    errorHandler(err){
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
}