#### [Base javascript config](eslint-config-base/index.js)

extends defaults from `eslint:recommended`

`yarn add --dev @macpaw/eslint-config-base eslint eslint-plugin-import`

#### [React config](eslint-config-react/index.js)

extends defaults from `plugin:jsx-a11y/recommended`, `plugin:react/recommended`, `plugin:react-hooks/recommended`

`yarn add --dev @macpaw/eslint-config-react eslint eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

#### [Typescript config](eslint-config-typescript/index.js)

extends defaults from `plugin:@typescript-eslint/recommended`

`yarn add --dev @macpaw/eslint-config-typescript eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser`

## Usage

Extend necessary configs inside `.eslintrc.json`:

```
{
  "extends": [
    "@macpaw/eslint-config-base",
    "@macpaw/eslint-config-react",
    "@macpaw/eslint-config-typescript"
  ]
}
```

## Deploy

1. Run one of `yarn patch`, `yarn minor`, `yarn major` scripts to bump package.json version for each package
2. [Create new release](https://github.com/MacPaw/eslint-config/releases/new)
