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
  async translateRepositoryToJSON(): Promise<string> {
    return await this.appService.translateRepositoryToJSON();
  }

  @Get('/datasets')
  async getDatasets(): Promise<string> {
    return await this.appService.getDatasets();
  }

  @Post('/prompt')
  async designPrompt(
    @Body('actualJsonData') actualJsonData: string,
    @Body('hidingInfo') hidingInfo: object,
  ): Promise<string> {
    const data = await this.appService.designPrompt(actualJsonData, hidingInfo);
    // console.log('--controller--', data);
    return data;
  }

  @Post('/reconstruct')
  async reconstructSoftwareArtifacts(): Promise<string> {
    return await this.appService.reconstructSoftwareArtifacts();
  }

  @Get('/info')
  async getInfo(): Promise<string> {
    return await this.appService.getInfo();
  }

  @Get('/analytics')
  async getAnalytics(): Promise<string> {
    return await this.appService.getAnalytics();
  }

  @Get('/about')
  async getAbout(): Promise<string> {
    return await this.appService.getAbout();
  }
}
