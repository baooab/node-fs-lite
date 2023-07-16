# ⚡ fs-lite

A lightweight alternative to `fs-extra`.

- ✨ esm-based source code
- 🎉 no dependencies
- 🪄 sync-based async function
- 👍 type safe

## Installation

```bash
npm install @zhangbao/fs-lite
```

## Usage

```js
import fs from '@zhangbao/fs-lite'
```

## Methods

### Async

- `copy`(alias: `ncp`)
- `move`
- `remove`
- `mkdirs`(alias: `mkdirp`, `ensureDir`)
- `emptyDir`
- `createFile`
- `readFile`
- `writeFile`
- `readJson`
- `writeJson`
- `pathExists`

### Sync

- `copySync`(alias: `ncpSync`)
- `moveSync`
- `removeSync`
- `mkdirsSync`(alias: `mkdirpSync`, `ensureDirSync`)
- `emptyDirSync`
- `createFileSync`
- `readFileSync`
- `writeFileSync`
- `readJsonSync`
- `writeJsonSync`
- `pathExistsSync`

## License

Licensed under MIT

Copyright (c) 2023-present Bao Zhang
