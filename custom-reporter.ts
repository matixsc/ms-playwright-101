import type {  Reporter, FullConfig, Suite, TestCase, TestResult, FullResult } from '@playwright/test/reporter';
import fs from 'fs';

type TestSummary = {
  title: string;
  status: string;
  duration: number;
  error?: string;
};

class CustomReporter implements Reporter {
  private results: TestSummary[] = [];

  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting test run with ${suite.allTests().length} tests`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    this.results.push({
      title: test.titlePath().join(' › '),
      status: result.status,
      duration: result.duration,
      error: result.error?.message,
    });
  }

  onEnd(result: FullResult) {
    const passed = this.results.filter(r => r.status === 'passed').length;
    const failed = this.results.filter(r => r.status === 'failed').length;

    console.log('Test run summary');
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.log(`Total: ${this.results.length}`);

    fs.writeFileSync(
      'custom-report.json',
      JSON.stringify(this.results, null, 2)
    );

    console.log('Custom report written to custom-report.json');
  }
}

export default CustomReporter;