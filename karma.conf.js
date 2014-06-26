// Karma configuration
// Generated on Thu Jun 26 2014 16:55:50 GMT-0500 (CDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        frameworks: ['jasmine', 'requirejs', 'traceur'],

        preprocessors: {
            'src/**/*.js': ['traceur'],
            'tests/**/*.test.js': ['traceur']
        },

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'tests/**/*.test.js', included: false},
            'tests/_collector.js'
        ],


        // list of files to exclude
        exclude: [
        ],

        traceurPreprocessor: {
            options: {
                sourceMap: true,
                modules: 'requirejs',
                annotations: true,
                types: true
            }
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
