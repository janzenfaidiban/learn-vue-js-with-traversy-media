module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://61ca05426f54ff00682aa809--sharp-booth-35a680.netlify.app',
                // target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        },
    },
}
