export const ENV = process.env.NODE_ENV;
export const ENV_PRODUCTION = ENV === 'production';
export const HOSTNAME = ENV_PRODUCTION ? 'http://173.232.235.70' : 'http://localhost:9000';