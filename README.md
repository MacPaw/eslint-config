### [@macpaw/eslint-config-base](eslint-config-base/index.js)

`yarn add --dev @macpaw/eslint-config-base`

### [@macpaw/eslint-config-react](eslint-config-react/index.js)

`yarn add --dev @macpaw/eslint-config-react`

### [@macpaw/eslint-config-typescript](eslint-config-typescript/index.js)

`yarn add --dev @macpaw/eslint-config-typescript`

### [@macpaw/eslint-config-prettier](eslint-config-prettier/index.js)

`yarn add --dev @macpaw/eslint-config-prettier`

## Usage

Extend necessary configs inside `.eslintrc.json`:

```
{
  "extends": [
    "@macpaw/eslint-config-base", // optional (required only when you do not use packages below)
    "@macpaw/eslint-config-react", // optional
    "@macpaw/eslint-config-typescript", // optional
    "@macpaw/eslint-config-prettier", // optional
  ]
}
```

## Deploy

1. Run one of `yarn patch`, `yarn minor`, `yarn major` scripts to bump package.json version for each package
2. [Create new release](https://github.com/MacPaw/eslint-config/releases/new)

## Testing in related projects
There is a way to test new version of eslint-config without publishing it to npm:

1. Execute `npm link` inside a necessary config project root.
2. Execute `npm link @macpaw/eslint-config-${name}` inside related project's root.
3. Rebuild related project if needed.
4. When finish testing run `npm unlink @macpaw/eslint-config-${name}`
