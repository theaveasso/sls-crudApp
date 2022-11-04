import type { AWS } from '@serverless/typescript';

const dynamoDBResources: AWS['resources']['Resources'] = {
  itemsTable: {
    Type: 'AWS::DynamoDB::Table',
    Properties: {
      TableName: '${self:custom.itemsTableName}',
      BillingMode: 'PAY_PER_REQUEST',
      AttributeDefinitions: [
        {
          AttributeName: 'id',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'id',
          KeyType: 'HASH',
        },
      ],
    },
  },
};

export default dynamoDBResources;
