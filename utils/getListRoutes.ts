/* eslint-disable no-restricted-syntax */
import * as fs from 'fs';
import * as path from 'path';

function recursivelyListFiles(parentPath: string) {
  const dir = fs.readdirSync(parentPath, { encoding: 'utf8', withFileTypes: true });

  const filePaths: string[] = [];

  for (const file of dir) {
    const filePath = path.join(parentPath, path.basename(file.name));

    if (file.isFile()) {
      filePaths.push(filePath);
    } else if (file.isDirectory()) {
      filePaths.push(...recursivelyListFiles(filePath));
    }
  }

  return filePaths;
}

export default function getListRoutes(dirname: string) {
  const parentPath = path.join(process.cwd(), 'data', dirname);

  return recursivelyListFiles(parentPath).map(filePath => {
    const filename = filePath.replace(`${parentPath}${path.sep}`, '');
    return filename.replace(path.extname(filename), '');
  });
}
