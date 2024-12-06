import * as fs from 'fs/promises';
import * as path from 'path';

export class ScribeReader {
  static async readScribeFiles(basePath: string): Promise<any[]> {
    const files = await fs.readdir(basePath);
    const scribeFiles = files.filter(file => file.endsWith('.scribe'));

    const results = [];
    for (const file of scribeFiles) {
      const content = await fs.readFile(path.join(basePath, file), 'utf8');
      results.push(JSON.parse(content));
    }
    return results;
  }
}
