import { Module, DynamicModule } from '@nestjs/common';
import { DocsLibraryService } from './docs-library.service';

@Module({})
export class DocsLibraryModule {
  static forRoot(): DynamicModule {
    return {
      module: DocsLibraryModule,
      providers: [DocsLibraryService],
      exports: [DocsLibraryService],
    };
  }
}
