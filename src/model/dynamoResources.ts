import type { AWS } from '@serverless/typescript';

const dynamoResources : AWS['resources']['Resources'] = {
  itemTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "${self:custom.itemTableName}",
      BillingMode: "PAY_PER_REQUEST",
      AttributeDefinitions: [
        {
          AttributeName: "id",
          AttributeType: "S"
        }
      ],
      KeySchema: [
        {
          AttributeName: "id",
          KeyType: "HASH"
        }
      ]
    }
  }

}

export default dynamoResources
