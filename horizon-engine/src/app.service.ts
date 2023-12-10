import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class AppService {
  async translateToJson(javaCode: string): Promise<string> {
    // try {
    //   const executeCommand = `python translateToJson.py '''${javaCode}'''`;

    //   const { stdout, stderr } = await new Promise<{
    //     stdout: string;
    //     stderr: string;
    //   }>((resolve, reject) => {
    //     const pythonProcess = exec(executeCommand, (error, stdout, stderr) => {
    //       if (error) {
    //         reject({ stdout, stderr });
    //       } else {
    //         resolve({ stdout, stderr });
    //       }
    //     });

    //     pythonProcess.stdin.end();
    //   });

    //   if (stderr) {
    //     throw new Error(stderr);
    //   }
    //   console.log(stdout);
    //   return stdout;
    // } catch (e) {
    //   console.error('Error', e);
    //   throw e;
    // }
    return new Promise((resolve, reject) => {
      // Spawn a Python child process
      const pythonProcess = spawn('python', ['translateToJson.py']);

      // Handle output from the Python process
      let pythonOutput = '';

      pythonProcess.stdout.on('data', (data) => {
        pythonOutput += data.toString();
      });

      // Handle errors from the Python process
      pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python process: ${data}`);
        reject(data.toString());
      });

      // Handle the Python process exit
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          resolve(pythonOutput);
        } else {
          console.error(`Python process exited with code ${code}`);
          reject(`Python process exited with code ${code}`);
        }
      });

      // Send the Java code to the Python process through stdin
      pythonProcess.stdin.write(javaCode);
      pythonProcess.stdin.end(); // Close the stdin stream to indicate the end of input
    });
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
