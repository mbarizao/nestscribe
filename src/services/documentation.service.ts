import { Injectable } from '@nestjs/common';
import { ScribeReader } from '../utils/scribe-reader.util';

@Injectable()
export class DocumentationService {
  async generateDocsJson(): Promise<any> {
    const docs = await ScribeReader.readScribeFiles('./src/docs');
    return { endpoints: docs };
  }
}
