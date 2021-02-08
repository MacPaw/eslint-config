### [@macpaw/eslint-config-base](eslint-config-base/index.js)

`yarn add --dev @macpaw/eslint-config-base eslint eslint-plugin-import`

### [@macpaw/eslint-config-react](eslint-config-react/index.js)

`yarn add --dev @macpaw/eslint-config-react eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

### [@macpaw/eslint-config-typescript](eslint-config-typescript/index.js)

`yarn add --dev @macpaw/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser`

## Usage

Extend necessary configs inside `.eslintrc.json`:

```
{
  "extends": [
    "@macpaw/eslint-config-base", // required
    "@macpaw/eslint-config-react", // optional
    "@macpaw/eslint-config-typescript" // optional
  ]
}
```

## Deploy

1. Run one of `yarn patch`, `yarn minor`, `yarn major` scripts to bump package.json version for each package
2. [Create new release](https://github.com/MacPaw/eslint-config/releases/new)
