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

## Development

download:

```bash
$ git clone https://github.com/baooab/node-fs-lite.git
$ cd node-fs-lite
```

run test after change:


```bash
$ npm run test
```

commit changes:

```bash
$ git add .
$ git commit -m 'message to show your changes' # see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
```

publish:

```bash
$ npm version patch # or minor/major
$ npm publish
# push chanegs to remote branch(Github)
$ git push
$ giy push --tags
```

## License

Licensed under MIT

Copyright (c) 2023-present Bao Zhang
