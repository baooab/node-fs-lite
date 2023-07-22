declare function readJsonSync(file: string): Record<string, any> | undefined;

declare function writeJsonSync(file: string, content: Record<string, any>): void;

declare function createFileSync(file: string, content?: string): void;

declare function writeFileSync(file: string, content: string): void;

declare function readFileSync(file: string): string | undefined;

declare function mkdirsSync(dir: string): string;

declare function emptyDirSync(dir: string): void;

declare function pathExistsSync(path: string): boolean;

declare function copySync(source: string, destination: string): void;

declare function moveSync(source: string, destination: string): void;

declare function removeSync(path: string): void;

declare const readJson: (file: string) => Promise<Record<string, any>>;
declare const writeJson: (file: string, content: Record<string, any>) => Promise<void>;
declare const createFile: (file: string, content?: string) => Promise<void>;
declare const writeFile: (file: string, content: string) => Promise<void>;
declare const readFile: (file: string) => Promise<string>;
declare const mkdirs: (dir: string) => Promise<string>;
declare const emptyDir: (dir: string) => Promise<void>;
declare const pathExists: (path: string) => Promise<boolean>;
declare const copy: (source: string, destination: string) => Promise<void>;
declare const move: (source: string, destination: string) => Promise<void>;
declare const remove: (path: string) => Promise<void>;
declare const mkdirp: (dir: string) => Promise<string>;
declare const ensureDir: (dir: string) => Promise<string>;
declare const ensureFile: (file: string, content?: string) => Promise<void>;
declare const rimraf: (path: string) => Promise<void>;
declare const ncp: (source: string, destination: string) => Promise<void>;
declare const mkdirpSync: typeof mkdirsSync;
declare const ensureDirSync: typeof mkdirsSync;
declare const ensureFileSync: typeof createFileSync;
declare const rimrafSync: typeof removeSync;
declare const ncpSync: typeof copySync;

export { copy, copySync, createFile, createFileSync, emptyDir, emptyDirSync, ensureDir, ensureDirSync, ensureFile, ensureFileSync, mkdirp, mkdirpSync, mkdirs, mkdirsSync, move, moveSync, ncp, ncpSync, pathExists, pathExistsSync, readFile, readFileSync, readJson, readJsonSync, remove, removeSync, rimraf, rimrafSync, writeFile, writeFileSync, writeJson, writeJsonSync };
