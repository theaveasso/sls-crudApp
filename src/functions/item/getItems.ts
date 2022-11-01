import { APIGatewayProxyEvent, Callback, Context } from 'aws-lambda';

import { formatJSONResponse } from '@libs/api-gateway';

export const handler = async () => {
	return formatJSONResponse({
		data: {
			message: 'All Items',
		},
	});
};
