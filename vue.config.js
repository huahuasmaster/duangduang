module.exports = {
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        proxy: {
            '/duangduang/api': {
                target: 'http://localhost:8083',
                ws: true,
                changeOrigin: true
            },
        }
    },
}