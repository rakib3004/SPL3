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
  async translateRepositoryToJSON(): string {
    return await this.appService.translateRepositoryToJSON();
  }

  @Get('/datasets')
  async getDatasets(): string {
    return await this.appService.getDatasets();
  }

  @Post('/prompt')
  async designPrompt(
    @Body('actualJsonData') actualJsonData: string,
    @Body('hidingInfo') hidingInfo: object,
  ): Promise<string> {
    return await this.appService.designPrompt(actualJsonData,hidingInfo);
  }

  @Post('/reconstruct')
  async reconstructSoftwareArtifacts(): string {
    return await this.appService.reconstructSoftwareArtifacts();
  }

  @Get('/info')
  async getInfo(): string {
    return await this.appService.getInfo();
  }

  @Get('/analytics')
  async getAnalytics(): string {
    return await this.appService.getAnalytics();
  }

  @Get('/about')
  async getAbout(): string {
    return await this.appService.getAbout();
  }
}
