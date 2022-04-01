const { resolve } = require('path')

const config = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watchOptions: {
        ignored: /node_modules/
    }
}

const entries = [
    {
        entry: './src/main/main.ts',
        target: 'electron-main',
        output: {
            filename: 'main.js',
            path: resolve(__dirname, 'dist')
        }
    },
    {
        entry: './src/renderer/renderer.ts',
        target: 'electron-renderer',
        output: {
            filename: 'renderer.js',
            path: resolve(__dirname, 'dist')
        }
    }
]

module.exports = entries.map((entry) => Object.assign(entry, config))