module.exports = {
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        proxy: {
            '/duangduang/api': {
                target: 'http://localhost:18083',
                ws: true,
                changeOrigin: true
            },
        },
        port:18080
    },
}