module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        'import/prefer-default-export': 'off'
    }
};
