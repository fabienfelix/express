module.exports = function(config) {
    config.set({

        basePath: '../..',

        files: [
            // Libraries
            './app/bower_components/angular/angular.js',
            './app/bower_components/angular-mocks/angular-mocks.js',
            './app/bower_components/angular-loader/angular-loader.js',
            './app/bower_components/angular-animate/angular-animate.js',
            './app/bower_components/angular-resource/angular-resource.js',
            './app/bower_components/angular-route/angular-route.js',
            './app/bower_components/angular-cookies/angular-cookies.js',
            './app/bower_components/jquery/dist/jquery.js',
            // Views
            './app/views/**/*.js',
            // Specs
            './test/unit/spec/*.js'

        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors:
        // https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters:
        // https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        autoWatch: true,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]

    });
};
