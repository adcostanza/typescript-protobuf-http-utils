var path = require('path');
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },

    "target": "node",
    node: {
        __dirname: false,
        __filename: false,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "#inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.ts$/, loader: "awesome-typescript-loader"},
            {
                test: /\.(template)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        },
                    },
                ]
            },
        ]
    },
};
