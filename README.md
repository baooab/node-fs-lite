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

## Docs

fs-lite's implementation is sync-first, the async method is just the result of asynchronization of the corresponding sync method(via internal `toAsync` function).Therefore, the following only lists the API of sync method.

```ts
// sync method
fs.copySync('/tmp/myfile', '/tmp/mynewfile')
// corresponding to the async method, just add an `await` keyword in front.
await fs.copy('/tmp/myfile', '/tmp/mynewfile')
```

### `copySync`(alias: `ncpSync`)

```ts
// Syntax: copySync(source: string, destination: string)
// Description: Copy a file or directory. The directory can have contents.
//              Overwrite if file or directory exists.

// Examples

// copy file
fs.copySync('/tmp/myfile', '/tmp/mynewfile')

// copy directory, even if it has subdirectories or files
fs.copySync('/tmp/mydir', '/tmp/mynewdir')
```

### `moveSync`

```ts
// Syntax: moveSync(source: string, destination: string)
// Description: Moves a file or directory
//              Overwrite if file or directory exists.

fs.moveSync('/tmp/somefile', '/tmp/does/not/exist/yet/somefile')
```

### `removeSync`

```ts
// Syntax: removeSync(path: string)
// Description: Removes a file or directory. The directory can have contents. 
//              If the path does not exist, silently does nothing.

// Examples

// remove file
fs.removeSync('/tmp/myfile')

fs.removeSync('/home/zhangbao') // I just deleted my entire HOME directory.
```

### `mkdirsSync`(alias: `mkdirpSync`, `ensureDirSync`)

```ts
// Syntax: mkdirsSync(dir: string)
// Description: Ensures that the directory exists. 
//              If the directory structure does not exist, it is created.
//              If provided, silently do nothing.

// Examples

fs.ensureDirSync('path/to/dir')
// dir has now been created, including the directory it is to be placed in
```

### `emptyDirSync`

```ts
// Syntax: emptyDirSync(dir: string)
// Description: Emptys a directory.
//              Deletes directory contents if the directory is not empty. The directory itself is not deleted.
//              If the directory does not exist, silently do nothing.

// Examples

// assume this directory has a lot of files and folders
fs.emptyDirSync('/tmp/some/dir')
```

### `createFileSync`

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

### `readFileSync`

```ts
// Syntax: readFileSync(file: string): string | null
// Description: Reads a file content.
//              If the file does not exist, return null.

// Examples

readFileSync('path/to/file')
// return file content, a string value

readFileSync('path/to/not/exist/file')
// return `null`
```

### `writeFileSync`

```ts
// Syntax: writeFileSync(file: string, content: string)
// Description: Writes content to a file.

// Examples

fs.writeJsonSync('./hello.txt', 'hello world')
```

### `readJsonSync`

```ts
// Syntax: readJsonSync(file: string): Record<string, any> | null
// Description: Reads a JSON file and then parses it into an object.
//              If the file does not exist, return null.

// Examples

const packageObj = fs.readJsonSync('./package.json')
console.log(packageObj.version) // => 2.0.0
```

### `writeJsonSync`

```ts
// Syntax: writeJsonSync(file: string, object: Record<string, any>)
// Description: Writes an object to a JSON file.

// Examples

fs.writeJsonSync('./package.json', {name: 'fs-extra'})
```

### `pathExistsSync`

```ts
// Syntax: pathExistsSync(path: string)
// Description: Test whether or not the given path exists by checking with the file system.
//              An alias for fs.existsSync().

// Examples

fs.pathExists('/tmp/this/path/does/not/exist/file.txt')
// false
fs.pathExists('/tmp/this/path/does/exist/file.txt')
// true
```

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
# then commit to git
$ git add .
# see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
$ git commit -m 'message to show your changes'
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
