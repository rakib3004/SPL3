import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  translateToJson() {
    return '{"className": "getBox"}';
  }

  translateRepositoryToJSON() {
    return '{"name": "git_repo"}';
  }

  getDatasets() {
    return 'datasets';
  }

  getPrompt() {
    return 'prompt';
  }

  reconstructSoftwareArtifacts() {
    return 'complete software artifacts';
  }

  getInfo() {
    return 'info';
  }

  getAnalytics() {
    return 'analytics';
  }

  getAbout() {
    return 'about';
  }
}
