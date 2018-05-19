/**
 * Configuration file: decides the PORT, IP etc to use.
 */
'use strict';

/**
 * Project dependencies.
*/

const config = {

    test :{
        PORT: 8080,
        HOST: 'localhost',
        db: {
            username: '',
            password: '',
            port: '',
            name: '',
            host: ''
        }
    },
    dev :{
        PORT : 3000,
        HOST: 'localhost',
        db: {
            username: 'catalog',
            password: 'products',
            port: 29733,
            name: 'products',
            host: 'ds129733.mlab.com'
        }
    },
    stage :{
        PORT : 3000,
        HOST: '',
        db: {
            username: '',
            password: '',
            port: 0,
            name: '',
            host: ''
        }
    }
};
process.env.dev = true;
var env = 'dev';
module.exports = config[env];

