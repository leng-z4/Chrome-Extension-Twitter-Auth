module.exports = {
    entry: './src/js/main.js',
    output: {
        path: `${__dirname}/dist`,
        filename: "main_bundle.js"
    },
    devtool: 'cheap-module-source-map'
}