export const {
    APP_PORT = 3000,
    NODE_ENV = 'development',
    
    DB_USERNAME = 'jjunpro',
    DB_PASSWORD = 'cmd4515',
    DB_HOST = 'ds113855.mlab.com',
    DB_PORT = 13855,
    DB_NAME = 'jjunpro',

    SESS_NAME = 'jjunpro',
    SESS_SECRET = 'cmd%*%&1591',
    SESS_LIFETIME = 1000 * 60 * 60 * 2,

    PREDIS_HOST = 'redis-12717.c8.us-east-1-3.ec2.cloud.redislabs.com',
    PREDIS_PORT = 12717,
    PREDIS_PASSWORD = 'uFMcBAIefJtugzaqke2Hwykz3tqrSHIi',
} = process.env

export const IN_PROD = NODE_ENV === 'production';