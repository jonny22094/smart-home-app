module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/prefer-default-export': 'off',
    'react/no-array-index-key': 'off',
    'prefer-destructuring': 'off'
  }
};