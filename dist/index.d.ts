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

declare const readJson: (...args: any[]) => Promise<Record<string, any>>;
declare const writeJson: (...args: any[]) => Promise<void>;
declare const createFile: (...args: any[]) => Promise<void>;
declare const writeFile: (...args: any[]) => Promise<void>;
declare const readFile: (...args: any[]) => Promise<string>;
declare const mkdirs: (...args: any[]) => Promise<string>;
declare const emptyDir: (...args: any[]) => Promise<void>;
declare const pathExists: (...args: any[]) => Promise<boolean>;
declare const copy: (...args: any[]) => Promise<void>;
declare const move: (...args: any[]) => Promise<void>;
declare const remove: (...args: any[]) => Promise<void>;
declare const mkdirp: (...args: any[]) => Promise<string>;
declare const ensureDir: (...args: any[]) => Promise<string>;
declare const ensureFile: (...args: any[]) => Promise<void>;
declare const rimraf: (...args: any[]) => Promise<void>;
declare const ncp: (...args: any[]) => Promise<void>;
declare const mkdirpSync: typeof mkdirsSync;
declare const ensureDirSync: typeof mkdirsSync;
declare const ensureFileSync: typeof createFileSync;
declare const rimrafSync: typeof removeSync;
declare const ncpSync: typeof copySync;

export { copy, copySync, createFile, createFileSync, emptyDir, emptyDirSync, ensureDir, ensureDirSync, ensureFile, ensureFileSync, mkdirp, mkdirpSync, mkdirs, mkdirsSync, move, moveSync, ncp, ncpSync, pathExists, pathExistsSync, readFile, readFileSync, readJson, readJsonSync, remove, removeSync, rimraf, rimrafSync, writeFile, writeFileSync, writeJson, writeJsonSync };
