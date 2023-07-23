'use strict';

const node_fs = require('node:fs');
const path = require('node:path');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const path__default = /*#__PURE__*/_interopDefaultCompat(path);

function readFileSync(file) {
  if (!node_fs.existsSync(file)) {
    return null;
  }
  return node_fs.readFileSync(file, { encoding: "utf-8" });
}

function readJsonSync(file) {
  const fileStr = readFileSync(file);
  return JSON.parse(fileStr);
}

function writeFileSync(file, content) {
  if (node_fs.existsSync(file)) {
    node_fs.rmSync(file, { recursive: true, force: true });
  }
  const dir = path__default.dirname(file);
  if (!node_fs.existsSync(dir)) {
    node_fs.mkdirSync(dir, { recursive: true });
  }
  return node_fs.writeFileSync(file, content, { encoding: "utf-8" });
}

function writeJsonSync(file, object) {
  return writeFileSync(file, JSON.stringify(object, null, 2));
}

function createFileSync(file, content = "") {
  if (node_fs.existsSync(file)) {
    return;
  }
  return writeFileSync(file, content);
}

function mkdirsSync(dir) {
  if (node_fs.existsSync(dir)) {
    return;
  }
  return node_fs.mkdirSync(dir, { recursive: true });
}

function emptyDirSync(dir) {
  if (!node_fs.existsSync(dir)) {
    return;
  }
  for (const file of node_fs.readdirSync(dir)) {
    node_fs.rmSync(path__default.resolve(dir, file), { recursive: true, force: true });
  }
}

function pathExistsSync(path) {
  return node_fs.existsSync(path);
}

function copySync(source, destination) {
  if (node_fs.statSync(source).isDirectory()) {
    copyDirSync(source, destination);
  } else {
    const dir = path__default.dirname(destination);
    if (!node_fs.existsSync(dir)) {
      node_fs.mkdirSync(dir, { recursive: true });
    }
    node_fs.copyFileSync(source, destination);
  }
}
function copyDirSync(source, destination) {
  if (node_fs.existsSync(destination)) {
    node_fs.rmSync(destination, { recursive: true, force: true });
  }
  node_fs.mkdirSync(destination, { recursive: true });
  for (const file of node_fs.readdirSync(source)) {
    const srcFile = path__default.resolve(source, file);
    const destFile = path__default.resolve(destination, file);
    copySync(srcFile, destFile);
  }
}

function removeSync(path) {
  return node_fs.rmSync(path, { recursive: true, force: true });
}

function moveSync(source, destination) {
  copySync(source, destination);
  return removeSync(source);
}

function toAsync(method) {
  return async function asyncMethod(...args) {
    return method.apply(this, args);
  };
}

const readJson = toAsync(readJsonSync);
const writeJson = toAsync(writeJsonSync);
const createFile = toAsync(createFileSync);
const writeFile = toAsync(writeFileSync);
const readFile = toAsync(readFileSync);
const mkdirs = toAsync(mkdirsSync);
const emptyDir = toAsync(emptyDirSync);
const pathExists = toAsync(pathExistsSync);
const copy = toAsync(copySync);
const move = toAsync(moveSync);
const remove = toAsync(removeSync);
const mkdirp = mkdirs;
const ensureDir = mkdirs;
const ensureFile = createFile;
const rimraf = remove;
const ncp = copy;
const mkdirpSync = mkdirsSync;
const ensureDirSync = mkdirsSync;
const ensureFileSync = createFileSync;
const rimrafSync = removeSync;
const ncpSync = copySync;

exports.copy = copy;
exports.copySync = copySync;
exports.createFile = createFile;
exports.createFileSync = createFileSync;
exports.emptyDir = emptyDir;
exports.emptyDirSync = emptyDirSync;
exports.ensureDir = ensureDir;
exports.ensureDirSync = ensureDirSync;
exports.ensureFile = ensureFile;
exports.ensureFileSync = ensureFileSync;
exports.mkdirp = mkdirp;
exports.mkdirpSync = mkdirpSync;
exports.mkdirs = mkdirs;
exports.mkdirsSync = mkdirsSync;
exports.move = move;
exports.moveSync = moveSync;
exports.ncp = ncp;
exports.ncpSync = ncpSync;
exports.pathExists = pathExists;
exports.pathExistsSync = pathExistsSync;
exports.readFile = readFile;
exports.readFileSync = readFileSync;
exports.readJson = readJson;
exports.readJsonSync = readJsonSync;
exports.remove = remove;
exports.removeSync = removeSync;
exports.rimraf = rimraf;
exports.rimrafSync = rimrafSync;
exports.writeFile = writeFile;
exports.writeFileSync = writeFileSync;
exports.writeJson = writeJson;
exports.writeJsonSync = writeJsonSync;
