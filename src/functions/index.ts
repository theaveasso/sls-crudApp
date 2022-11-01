import type { AWS } from '@serverless/typescript';

const functions: AWS['functions'] = {
	createItem: {
		handler: 'src/functions/item/createItem.handler',
		events: [
			{
				httpApi: {
					path: '/createItem',
					method: 'post',
				},
			},
		],
	},
	getItems: {
		handler: 'src/functions/item/getItems.handler',
		events: [
			{
				httpApi: {
					path: '/getItems',
					method: 'get',
				},
			},
		],
	},
	updateItem: {
		handler: 'src/functions/item/updateItem.handler',
		events: [
			{
				httpApi: {
					path: '/getItems/{id}',
					method: 'put',
				},
			},
		],
	},
};

export default functions;
