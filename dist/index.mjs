import { existsSync, readFileSync as readFileSync$1, rmSync, mkdirSync, writeFileSync as writeFileSync$1, readdirSync, statSync, copyFileSync } from 'node:fs';
import path from 'node:path';

function readFileSync(file) {
  if (!existsSync(file)) {
    return;
  }
  return readFileSync$1(file, { encoding: "utf-8" });
}

function readJsonSync(file) {
  const fileStr = readFileSync(file);
  return JSON.parse(fileStr);
}

function writeFileSync(file, content) {
  if (existsSync(file)) {
    rmSync(file, { recursive: true, force: true });
  }
  const dir = path.dirname(file);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  return writeFileSync$1(file, content, { encoding: "utf-8" });
}

function writeJsonSync(file, content) {
  return writeFileSync(file, JSON.stringify(content, null, 2));
}

function createFileSync(file, content = "") {
  if (existsSync(file)) {
    return;
  }
  return writeFileSync(file, content);
}

function mkdirsSync(dir) {
  if (existsSync(dir)) {
    return;
  }
  return mkdirSync(dir, { recursive: true });
}

function emptyDirSync(dir) {
  if (!existsSync(dir)) {
    return;
  }
  for (const file of readdirSync(dir)) {
    rmSync(path.resolve(dir, file), { recursive: true, force: true });
  }
}

function pathExistsSync(path) {
  return existsSync(path);
}

function copySync(source, destination) {
  if (statSync(source).isDirectory()) {
    copyDirSync(source, destination);
  } else {
    const dir = path.dirname(destination);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    copyFileSync(source, destination);
  }
}
function copyDirSync(source, destination) {
  if (!existsSync(destination)) {
    mkdirSync(destination, { recursive: true });
  }
  for (const file of readdirSync(source)) {
    const srcFile = path.resolve(source, file);
    const destFile = path.resolve(destination, file);
    copySync(srcFile, destFile);
  }
}

function removeSync(path) {
  return rmSync(path, { recursive: true, force: true });
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

export { copy, copySync, createFile, createFileSync, emptyDir, emptyDirSync, ensureDir, ensureDirSync, ensureFile, ensureFileSync, mkdirp, mkdirpSync, mkdirs, mkdirsSync, move, moveSync, ncp, ncpSync, pathExists, pathExistsSync, readFile, readFileSync, readJson, readJsonSync, remove, removeSync, rimraf, rimrafSync, writeFile, writeFileSync, writeJson, writeJsonSync };
