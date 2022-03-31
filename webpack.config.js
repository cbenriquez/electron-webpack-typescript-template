const { resolve } = require('path')

const config = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: resolve(__dirname, 'node_modules')
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    watchOptions: {
        poll: 1000
    }
}

const entries = [
    {
        entry: resolve(__dirname, 'src', 'main', 'main.ts'),
        target: 'electron-main',
        output: {
            filename: 'main.js',
            path: resolve(__dirname, 'dist')
        }
    },
    {
        entry: resolve(__dirname, 'src', 'renderer', 'renderer.ts'),
        target: 'electron-renderer',
        output: {
            filename: 'renderer.js',
            path: resolve(__dirname, 'dist')
        }
    }
]

module.exports = entries.map((entry) => Object.assign(entry, config))