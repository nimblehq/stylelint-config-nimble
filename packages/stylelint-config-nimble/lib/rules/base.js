const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: ['stylelint-config-sass-guidelines'],
  rules: {
    'function-calc-no-unspaced-operator': true,
    'max-nesting-depth': 3,
    'order/properties-alphabetical-order': null,
    'order/properties-order': [sortOrderSmacss({ emptyLineBefore: 'always' })],
  },
};
