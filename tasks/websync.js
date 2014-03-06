// webdav_sync: {

//     prod: {
//         options: {
//             local_path: __dirname + '/prod/index.html',
//             remote_path: webdav.prod.user + ":" + webdav.prod.pass + webdav.prod.url + "/terminalfour/mlwebdav/test"
//         }
//     },

//     dev: {
//         options: {
//             local_path: './prod/',
//             remote_path: 'http://' + webdav.dev.user + ":" + webdav.dev.pass + "@tcnt4apps.msudenver.edu:8080/t4dev2/mlwebdav"
//         }
//     },

//     local: {
//         options: {
//             local_path: "./prod/**",
//             remote_path: "http://" + webdav.dev.user + ":" + webdav.dev.pass + "@127.0.0.1:8080/t4dev/mlwebdav/prod"
//         }
//     }
// },

module.exports = function (grunt) {
    'use strict';
    // var webdav = grunt.file.readJSON('../config/webdav_credentials.json');
    grunt.config('webdav_sync', {
        default: {
            options: {
                local_path: 'prod/**',
                remote_path: 'http://' + "user" + ":" + "pass"+ "@tcnt4apps.msudenver.edu:8080/t4dev2/mlwebdav/prod"
            }
        }
    });
};
