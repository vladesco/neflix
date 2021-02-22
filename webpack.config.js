module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod'

    return isProductionMode
        ? require('./webpack.prod.config')
        : require('./webpack.dev.config')
}
