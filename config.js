exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['specs/spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
}
