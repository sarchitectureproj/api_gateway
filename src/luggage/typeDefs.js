export const tagTypeDef = `
type Tag {
    id: Int!
    passenger_id: String!
    cabin_id: String!
}
input TagInput {
    passenger_id: String!
    cabin_id: String!
}`;
export const luggageTypeDef = `
type Luggage {
    id: Int!
    weight: Int!
    status: String!
    tag_id: Int!
}
input LuggageInput {
    weight: Int!
    status: Int!
    tag_id: Int!
    
}`;
export const tagQueries = `
    allTags: [Tag]!
    tagById(id: Int!): Tag!
`;
export const tagMutations = `
    createTag(tag: TagInput!): Tag!
    deleteTag(id: Int!): Int
    updateTag(id: Int!, tag: TagInput!): Tag!
`;
export const luggageQueries = `
    allLuggages: [Luggage]!
    luggageById(id: Int!): Luggage!
`;

export const luggageMutations = `
    createLuggage(luggage: LuggageInput!): Luggage!
    deleteLuggage(id: Int!): Int
    updateLuggage(id: Int!, tag: LuggageInput!): Luggage!
`;