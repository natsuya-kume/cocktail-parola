module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    'plugin:react/jsx-runtime',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}
