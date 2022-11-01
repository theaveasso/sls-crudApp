import { APIGatewayProxyEvent } from 'aws-lambda';

import { formatJSONResponse } from '@libs/api-gateway';

export const handler = async (event: APIGatewayProxyEvent) => {
	try {
		const id = event.pathParameters.id;

		if (!id) {
			return formatJSONResponse({
				statusCode: 400,
				data: { message: 'Item id require' },
			});
		}
		return formatJSONResponse({
			statusCode: 200,
			data: {
				message: 'Item was updated successfully...',
			},
		});
	} catch (err) {
		return formatJSONResponse({
			statusCode: 502,
			data: { message: err.message },
		});
	}
};
