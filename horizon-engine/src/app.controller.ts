import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/translate')
  async translateToJson(@Body('javaCode') javaCode: string): Promise<string> {
    return await this.appService.translateToJson(javaCode);
  }

  @Post('/repo-translate')
  translateRepositoryToJSON(): string {
    return this.appService.translateRepositoryToJSON();
  }

  @Get('/datasets')
  getDatasets(): string {
    return this.appService.getDatasets();
  }

  @Post('/prompt')
  getPrompt(): string {
    return this.appService.getPrompt();
  }

  @Post('/reconstruct')
  reconstructSoftwareArtifacts(): string {
    return this.appService.reconstructSoftwareArtifacts();
  }

  @Get('/info')
  getInfo(): string {
    return this.appService.getInfo();
  }

  @Get('/analytics')
  getAnalytics(): string {
    return this.appService.getAnalytics();
  }

  @Get('/about')
  getAbout(): string {
    return this.appService.getAbout();
  }
}
