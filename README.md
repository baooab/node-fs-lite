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

## [WIP] Methods

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

```ts
// Syntax: removeSync(path: string)
// Description: Removes a file or directory. The directory can have contents. 
//              If the path does not exist, silently does nothing.

// Examples

// remove file
fs.removeSync('/tmp/myfile')

fs.removeSync('/home/jprichardson') // I just deleted my entire HOME directory.
```

- `mkdirsSync`(alias: `mkdirpSync`, `ensureDirSync`)

```ts
// Syntax: mkdirsSync(dir: string)
// Description: Ensures that the directory exists. 
//              If the directory structure does not exist, it is created.
//              If provided, silently do nothing.

// Examples

fs.ensureDirSync('path/to/dir')
// dir has now been created, including the directory it is to be placed in
```

- `emptyDirSync`
- `createFileSync`

```ts
// Syntax: createFileSync(file: string, content: string = '')
// Description: Create a file using optional content string
//              If provided, silently do nothing.

// Examples

createFileSync('path/to/file')
// Create a file without content(default use a empty string(`''`))
createFileSync('path/to/file', 'hello world')
// Create a file with content
```

- `readFileSync`

```ts
// Syntax: readFileSync(file: string)
// Description: Reads a file content.

// Examples

readFileSync('path/to/file')
// return file content, a string value

readFileSync('path/to/not/exist/file')
// return `undefined`
```

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
# build first
$ npm run build
# then commit to git
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
