import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDirectory = path.join(root, 'public');
const reader = path.join(publicDirectory, 'traktat', 'scroll.html');
await mkdir(path.join(publicDirectory, 'les'), { recursive: true });
await copyFile(reader, path.join(publicDirectory, 'index.html'));
await copyFile(reader, path.join(publicDirectory, 'les', 'index.html'));
