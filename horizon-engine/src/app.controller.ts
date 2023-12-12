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

  @Post('/prompt')
  async designPrompt(
    @Body('actualJsonData') actualJsonData: string,
    @Body('hidingInfo') hidingInfo: object,
  ): Promise<string> {
    const data = await this.appService.designPrompt(actualJsonData, hidingInfo);
    return data;
  }
  @Post('/reconstruct')
  async reconstructSoftwareArtifact(
    @Body('incompleteJsonData') incompleteJsonData: string,
    @Body('promptMessage') promptMessage: string,
  ): Promise<string> {
    return await this.appService.reconstructSoftwareArtifact(
      incompleteJsonData,
      promptMessage,
    );
  }

  @Get('/info')
  async getInfo(): Promise<string> {
    return await this.appService.getInfo();
  }

  @Get('/about')
  async getAbout(): Promise<string> {
    return await this.appService.getAbout();
  }
}
