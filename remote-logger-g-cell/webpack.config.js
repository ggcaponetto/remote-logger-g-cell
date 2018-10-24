var path = require('path');

module.exports = {
    mode: 'development',
    entry: './remote-logger-g-cell-client/transpiled/index.js',
    output: {
        path: path.resolve(__dirname, './remote-logger-g-cell-client/bundle'),
        filename: 'rlgcc.bundle.js'
    }
};