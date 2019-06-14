const env = process.env;
export default {
    port: env.PORT || 5000,
    nodeEnv: env.NODE_ENV || 'development'
};