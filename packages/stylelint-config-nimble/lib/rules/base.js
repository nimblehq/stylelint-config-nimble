const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate')

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: ['stylelint-config-sass-guidelines'],
  rules: {
    'order/properties-alphabetical-order': null,
    'order/properties-order': [sortOrderSmacss({ emptyLineBefore: 'always' })]
  }
}
