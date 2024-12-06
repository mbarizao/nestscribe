import { Request, Response } from 'express';
import { Injectable } from '@nestjs/common';
import { DocumentationService } from './services/documentation.service';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class DocsLibraryService {
  constructor(private readonly documentationService: DocumentationService) {}

  async setupDocs(app: any, route: string): Promise<void> {
    const docsJson = await this.documentationService.generateDocsJson();
    const template = readFileSync(join(__dirname, 'templates/documentation.template.html'), 'utf8');

    const renderedTemplate = template.replace(
      'window.__DOCS_JSON__ || { endpoints: [] }',
      `window.__DOCS_JSON__ = ${JSON.stringify(docsJson)}`
    );

    app.use(route, (req: Request, res: Response) => {
      res.send(renderedTemplate);
    });
  }
}
