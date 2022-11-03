import { APIGatewayProxyEvent } from 'aws-lambda';

import { formatJSONResponse } from '@libs/api-gateway';
import { dynamodb } from 'src/model';

export const handler = async (event: APIGatewayProxyEvent) => {
	try {
		const tableName = process.env.ITEM_TABLE
		const data = JSON.parse(event.body);

		if (!data) {
			return formatJSONResponse({
				statusCode: 400,
				data: { message: 'Missing Item body' },
			});
		}
	
		const record = await dynamodb.write(data, tableName)
		
		return formatJSONResponse({
			data: { message: 'Item was created successfully...', data },
		});
	} catch (err) {
		return formatJSONResponse({
			statusCode: 502,
			data: {
				message: err.message,
			},
		});
	}
};
