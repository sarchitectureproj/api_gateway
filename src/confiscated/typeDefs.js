export const itemTypeDef = `
type Item {
    id: Int!
    name: String!
    confiscation_date: String
    confiscation_time: String
    quantity: Int!
    category: Int!
    passenger: String!
}
input ItemInput {
    name: String!
    confiscation_date: String
    confiscation_time: String
    quantity: Int!
    category: Int!
    passenger: String!
}`;

export const categoryTypeDef = `
type Category {
    id: Int!
    name: String!
    description: String!
    recoverable: Boolean!
    delivery: Int
}
input CategoryInput {
    name: String!
    description: String!
    recoverable: Boolean!
    delivery: Int
}`;

export const deliveryTypeDef = `
type Delivery {
    id: Int!
    open_time: String!
    close_time: String!
    delivery_point: String!
}
input DeliveryInput {
    open_time: String!
    close_time: String!
    delivery_point: String!
}`;

export const itemQueries = `
    allItems: [Item]!
    itemById(id: Int!): Item!
`;
export const itemMutations = `
    createItem(item: ItemInput!): Item!
    deleteItem(id: Int!): Int
    updateItem(id: Int!, item: ItemInput!): Item!
`;

export const categoryQueries = `
    allCategories: [Category]!
    categoryById(id: Int!): Category!
`;
export const categoryMutations = `
    createCategory(category: CategoryInput!): Category!
    deleteCategory(id: Int!): Int
    updateCategory(id: Int!, category: CategoryInput!): Category!
`;

export const deliveryQueries = `
    allDeliveries: [Delivery]!
    deliveryById(id: Int!): Delivery!
`;
export const deliveryMutations = `
    createDelivery(delivery: DeliveryInput!): Delivery!
    deleteDelivery(id: Int!): Int
    updateDelivery(id: Int!, delivery: DeliveryInput!): Delivery!
`;