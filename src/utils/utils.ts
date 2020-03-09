const path = require('path');

const ROOT_PATH = path.join(__dirname, '..', '..');

export const resolve = (dir: string) => {
    return path.join(ROOT_PATH, dir);
}

