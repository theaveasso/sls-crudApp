import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { GetCommand, GetCommandInput, PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { table } from 'console';

const dynamoDBClient = new DynamoDBClient({
  maxAttempts: 3,
})

export const dynamodb = {
  write: async (data:Record<string, any>, tableName: string) => {
    const params: PutCommandInput = {
      TableName: tableName,
      Item: data      
    }

    const command = new PutCommand(params)

    await dynamoDBClient.send(command)

    return data
  },
  
  getAllItems: async (tableName: string) => {
    const params: GetCommandInput = {
      TableName: tableName,
      Key: {
        id
      }
    }
    const command = new GetCommand(params)
    const response = await dynamoDBClient.send(command)

    return response.Item
  }
}