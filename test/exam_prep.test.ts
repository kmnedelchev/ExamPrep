import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ExamPrep from '../lib/exam_prep-stack';

test('Dynamo DB Table', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new ExamPrep.ExamPrepStack(app, 'MyTestStack');
    // THEN
  const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::DynamoDB::Table', {});
});
