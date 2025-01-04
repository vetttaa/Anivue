import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  rules: {
    'eslint-comments/no-unlimited-disable': ['off'],
    'style/semi': ['error', 'always'],
  },
});
