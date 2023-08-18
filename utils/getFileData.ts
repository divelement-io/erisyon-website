import { parse, safeStringify } from '@stoplight/yaml';
import frontmatter from 'front-matter';
import * as fs from 'fs';
import * as path from 'path';

export default function getFileData<T = object>(filePath: string[]) {
  const fullPath = path.join(...filePath);
  const data = fs.readFileSync(path.join(process.cwd(), 'data', fullPath), 'utf8');
  const ext = path.extname(fullPath);

  try {
    if (ext === '.md') {
      const { attributes, body } = frontmatter<T>(data);
      return {
        ...parse<T>(safeStringify(attributes)),
        markdown: body,
      };
    }

    return parse<T>(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error parsing file:', filePath);
    throw error;
  }
}
