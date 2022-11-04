import type { AWS } from '@serverless/typescript';

import dynamoDBResource from './resources/dynamoDB';
import functions from './resources/functions';

const serverlessConfiguration: AWS = {
  service: 'sls-crudapp',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild',
    'serverless-offline',
    'serverless-dynamodb-local',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    profile: 'theaveasso',
    region: 'ap-southeast-1',
    logRetentionInDays: 1,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',

      ITEM_TABLE: '${self:custom.itemsTableName}',
    },
  },
  // import the function via paths
  functions,
  resources: {
    Resources: {
      ...dynamoDBResource,
    },
  },
  package: { individually: true },
  custom: {
    itemsTableName: '${sls:stage}-items-table',

    dynamodb: {
      stages: 'dev',
      start: {
        port: 8000,
        inMemory: true,
        migrate: true,
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    },

    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
