module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:eslint-plugin/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'functional'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                '@typescript-eslint/no-explicit-any': ['warn'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'no-unreachable': ['error'],
                'functional/no-promise-reject': ['warn'],
            },
        },
        {
            files: ['__test__/**', '**.test.ts'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
            rules: { 'jest/prefer-expect-assertions': 'off' },
        },
    ],
};
