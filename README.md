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

### Releasing and Publishing

Steps to make a release:
- To initiate a release, create a pull request from `master`` to release with the title Release.
- Ensure all CI checks pass successfully.
- Once CI checks are green and you have at least one approval, merge the pull request.
- Post-merge, the release GitHub Actions will trigger and create an "update versions" pull request to the `release` branch.
- Wait for the CI to turn green on the "update versions" pull request.
- Once CI is green, merge the "update versions" pull request.
- After this merge, the actions will trigger again. This time, they'll generate a new tag, create a new release, and publish packages to both GitHub and npm registries.

### Post-Release Activities

After a successful release, ensure you create a backmerge pull request from release to `master`. This ensures that the `master` branch stays up-to-date with the latest versions and changes.

## Testing in related projects
There is a way to test new version of eslint-config without publishing it to npm:

1. Execute `npm link` inside a necessary config project root.
2. Execute `npm link @macpaw/eslint-config-${name}` inside related project's root.
3. Rebuild related project if needed.
4. When finish testing run `npm unlink @macpaw/eslint-config-${name}`
