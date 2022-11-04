const ItemTableLocal = {
  TableName: '${self:custom.itemTableName}',
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH',
    },
  ],
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'S',
    },
  ],
};

export default ItemTableLocal;
