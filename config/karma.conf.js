module.exports = function(config) {
    config.set({
        frameworks: ["jasmine"],
        files: [
            "../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
            { pattern: "../test/*-test.js", type: "module", included: true }
        ],
        exclude: [],
        preprocessors: {},
        reporters: ["spec"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: true,
        concurrency: Infinity
    });
};