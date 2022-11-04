import {
  GetCommand,
  GetCommandInput,
  PutCommand,
  PutCommandInput,
} from '@aws-sdk/lib-dynamodb';

import ddbclient from 'src/model';

export const dynamodb = {
  write: async (data: Record<string, any>, tableName: string) => {
    const params: PutCommandInput = {
      TableName: tableName,
      Item: data,
    };

    const command = new PutCommand(params);

    await ddbclient.send(command);

    return data;
  },

  getAllItems: async (tableName: string) => {
    const params: GetCommandInput = {
      TableName: tableName,
      Key: {},
    };
    const command = new GetCommand(params);
    const response = await ddbclient.send(command);

    return response.Item;
  },
};
