# @exercise/mini-app-sdk

The contract between the **exercise-app** host and its mini apps. Mini apps import only from this
package, never from host code.

- `defineMiniApp({ id, name, emoji, color, version, requires?, component })` — mini app manifest
- `MiniAppThemeProvider` / `useMiniAppTheme()` — the host passes its colors down
- `MiniText`, `MiniView`, `Spacing` — themed primitives
- `getMissingCapabilities(manifest, available)` — host-side check for `requires`

## Install

The host installs exactly one copy, pinned to a tag:

```json
"@exercise/mini-app-sdk": "github:Leung190299/mini-app-sdk#v1.0.0"
```

Mini apps must list it under **`peerDependencies`** (not `dependencies`) so they share the host's copy —
a second copy would create a separate theme context and mini apps would silently fall back to the
default colors.

## Release

```bash
npm version minor            # bumps package.json and creates the git tag
git push --follow-tags
```
