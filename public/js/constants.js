export const ENV = process.env.NODE_ENV;
export const ENV_PRODUCTION = ENV === 'production';
export const HOSTNAME = ENV_PRODUCTION ? 'https://tinurl.cc' : 'http://localhost:9000';