module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    // disable unnecessary recommended rules
    'no-console': 0,
    'no-constant-condition': 0,

    // best practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'consistent-return': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': [2, 'smart'],
    'no-caller': 2,
    'no-global-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-new': 2,
    'no-new-wrappers': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-void': 2,
    'no-unused-expressions': 2,
    'no-unsafe-negation': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'no-with': 2,
    'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
    'yoda': 2,
    'require-atomic-updates': 2,
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'only-multiline',
    }],
    'array-callback-return': [2, { allowImplicit: true }],
    'complexity': [2, 10],
    'default-case': [2, { commentPattern: '^no default$' }],
    'default-case-last': 2,
    'guard-for-in': 2,
    'max-classes-per-file': [2, 1], 
    'no-alert': 2,
    'no-else-return': [2, { allowElseIf: false }],
    'no-empty-function': [2, {
      allow: [
        'arrowFunctions',
        'methods'
      ]
    }],
    'no-implicit-coercion': [2, {
      boolean: false,
      number: true,
      string: true,
      allow: []
    }],
    'no-magic-numbers': [2, {
      ignore: [0, 1],
      ignoreDefaultValues: true,
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false
    }],
    'no-param-reassign': [2, {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'staticContext' // for ReactRouter context
      ]
    }],
    'no-restricted-properties': [2, {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated'
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }],
    'no-nested-ternary': 2,
    'no-plusplus': 2,
    'no-undefined': 2,
    'no-unused-vars': 2,
    'no-unreachable': 2,

    // ES
    'no-var': 2,
    'prefer-const': 2,
    'arrow-parens': [2, 'always'],
    'arrow-spacing': [2, { before: true, after: true }],
    'generator-star-spacing': 2,
    'no-confusing-arrow': 2,
    'no-duplicate-imports': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'object-shorthand': 2,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'rest-spread-spacing': 2,
    'yield-star-spacing': 2,
    'template-tag-spacing': 2,
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false
    }],
    'prefer-arrow-callback': [2, {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }],
    'prefer-destructuring': [2, {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: true,
        object: false
      }
    }, {
      enforceForRenamedProperties: false
    }],
    'template-curly-spacing': 2,
    'array-bracket-newline': [2, { multiline: true, minItems: 5 }],
    'array-element-newline': [2, 'consistent'],
    'prefer-exponentiation-operator': 2,
    'prefer-object-spread': 2,

    // variables
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-multi-assign': 2,

    // node-related
    'global-require': 2,
    'handle-callback-err': 2,
    'no-buffer-constructor': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,

    // stylistic issues
    'curly': [2, 'multi-or-nest', 'consistent'],
    'indent': [2, 2, {
      flatTernaryExpressions: true,
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false,
    }],
    'linebreak-style': [2, 'unix'],
    'quotes': [2, 'single', { avoidEscape: true }],
    'semi': [2, 'always'],
    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'camelcase': 2,
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': 2,
    'eol-last': 2,
    'func-call-spacing': 2,
    'func-name-matching': 2,
    'implicit-arrow-linebreak': 2,
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],
    'new-parens': 2,
    'newline-before-return': 2,
    'no-array-constructor': 2,
    'no-empty': 2,
    'no-lonely-if': 2,
    'no-new-object': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { max: 2, maxBOF: 0, maxEOF: 0 }],
    'no-trailing-spaces': [2, {
      skipBlankLines: false,
      ignoreComments: false
    }],
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always'],
    'operator-linebreak': [2, 'before', { overrides: { '=': 'none' } }],
    'semi-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'switch-colon-spacing': 2,
    'max-len': [
      1,
      {
        'code': 120,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }
    ],
    'no-multi-spaces': [2, {
      'ignoreEOLComments': false
    }],
    'no-multi-str': 2,
    'function-call-argument-newline': [2, 'consistent'],
    'func-style': [2, 'expression'],
    'function-paren-newline': [2, 'multiline-arguments'],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
    'no-mixed-operators': [2, {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||']
      ],
      allowSamePrecedence: false
    }],
    'no-tabs': 2,
    'no-whitespace-before-property': 2,
    'nonblock-statement-body-position': [2, 'any'],
    'object-curly-newline': [2, {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true},
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true},
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true }
    }],
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': [2, 'always'],
    'newline-after-var': [2, 'always'],
    'operator-assignment': [2, 'always'],
    'padding-line-between-statements': [2, { blankLine: 'always', prev: '*', next: 'return' }],
    'padded-blocks': [2, {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
    }, {
      allowSingleLineBlocks: true
    }],
    'quote-props': [2, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    'spaced-comment': [2, 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'] // space here to support sprockets directives
      },
    }],

    // import
    'import/named': 2,
    'import/default': 0,
    'import/namespace': 0,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-deprecated': 0,
    'import/no-mutable-exports': 2,
    'import/first': 2,
    'import/no-duplicates': 2,
    'import/order': [2, {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroups: [
        {
          pattern: '*.+(png|svg)',
          group: 'sibling',
          patternOptions: { matchBase: true },
          position: 'after',
        },
        {
          pattern: '*.+(scss|sass|css)',
          group: 'sibling',
          patternOptions: { matchBase: true },
          position: 'after',
        },
      ],
    }],
    'import/newline-after-import': 2,
    'import/no-restricted-paths': 0,
    'import/no-absolute-path': 2,
    'import/no-dynamic-require': 2,
    'import/no-internal-modules': [0, {
      allow: [],
    }],
    'import/no-unassigned-import': 0,
    'import/no-named-default': 2,
    'import/no-anonymous-default-export': [1, {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],
    'import/group-exports': 0,
    'import/no-default-export': 0,
    'import/no-named-export': 0,
    'import/no-self-import': 1,
    'import/no-cycle': 0,
    'import/no-relative-parent-imports': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // jest config
        '**/jest.setup.js', // jest setup
        '**/vue.config.js', // vue-cli config
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
        '**/rollup.config.js', // rollup config
        '**/rollup.config.*.js', // rollup config
        '**/.eslintrc.js' // eslint config
      ],
      optionalDependencies: false
    }],
  }
};
