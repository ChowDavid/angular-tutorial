/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        packages: {
            formDemo: {
                main: '../app/formDemo.main.js',
                defaultExtension: 'js'
            },
            oneWayBinding: {
                main: '../app/onewayBinding.main.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
