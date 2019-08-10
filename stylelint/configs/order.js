'use strict';

const ON = true;
const OFF = null;

module.exports = {
  plugins: 'stylelint-scss',
  rules: {
    // @-else
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',

    // @-extend
    'scss/at-extend-no-missing-placeholder': ON,

    // @-function
    'scss/at-function-named-arguments': OFF,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': OFF,

    // @-if
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // @-import
    'scss/at-import-no-partial-leading-underscore': ON,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-import-partial-extension-whitelist': OFF,

    // @-mixin
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': OFF,
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': OFF,

    // @-rule
    'at-rule-no-unknown': OFF, // core rule disabled
    'scss/at-rule-no-unknown': true,

    // $-variable
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-default': OFF,
    'scss/dollar-variable-empty-line-before': OFF,
    'scss/dollar-variable-no-missing-interpolation': ON,
    'scss/dollar-variable-pattern': OFF,

    // %-placeholder
    'scss/percent-placeholder-pattern': OFF,

    // //-comment
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
      },
    ],
    'scss/double-slash-comment-inline': OFF,
    'scss/double-slash-comment-whitespace-inside': 'always',

    // Declaration
    'scss/declaration-nested-properties': OFF,
    'scss/declaration-nested-properties-no-divided-groups': ON,

    // Media feature
    'scss/media-feature-value-dollar-variable': OFF,

    // Operator
    'scss/operator-no-newline-after': OFF,
    'scss/operator-no-newline-before': ON,
    'scss/operator-no-unspaced': OFF,

    // Partial
    'scss/partial-no-import': OFF,

    // Selector
    'scss/selector-no-redundant-nesting-selector': ON,

    // General / Sheet
    'scss/no-duplicate-dollar-variables': OFF,
  },
};
