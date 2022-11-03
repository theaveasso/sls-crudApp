import type { AWS } from '@serverless/typescript'

const functions : AWS['functions'] = {
  createItem : {
    handler: 'src/functions/item/createItem.handler',
    events: [
      {
        httpApi : {
          path: '/new',
          method: 'post'
        }
      }
    ]
  },
  getItems : {
    handler: 'src/functions/item/getItems.handler',
    events: [
      {
        httpApi: {
          path: '/items',
          method: 'get'
        }
      }
    ]
  },
  updateItem : {
    handler: 'src/functions/item/updateItem.handler',
    events: [
      {
        httpApi: {
          path: '/update/{id}',
          method: 'put'
        }
      }
    ]
  }
}

export default functions