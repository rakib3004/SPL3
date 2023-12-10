import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class AppService {
  async translateToJson(javaCode: string): Promise<string> {
    try {
      const executeCommand = `python translateToJson.py "${javaCode}"`;

      const { stdout, stderr } = await new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
        const pythonProcess = exec(executeCommand, (error, stdout, stderr) => {
          if (error) {
            reject({ stdout, stderr });
          } else {
            resolve({ stdout, stderr });
          }
        });

        pythonProcess.stdin.end();
      });

      if (stderr) {
        throw new Error(stderr);
      }

      return stdout;
    } catch (e) {
      console.error('Error', e);
      throw e;
    }
  }
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
