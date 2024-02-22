module.exports = {
    plugins: [
        'babel-plugin-transform-typescript-metadata',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        [
            'module-resolver',
            {
                alias: {
                    app: './src/',
                },
            },
        ],
    ],
};
