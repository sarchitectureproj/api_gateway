export const crewTypeDef = `
type Crew {
    id: Int!
    username: String!
    phone_number: String!
    name: String!
    email: String!
    role: String!
}
input CrewInput {
    username: String!
    phone_number: String!
    name: String!
    email: String!
    role: String!
}
input LoginInput {
    username: String!
    password: String!
}`;

export const crewQueries = `
    allCrew: [Crew]!
    crewById(id: Int!): Crew!
`;

export const crewMutations = `
    createCrew(crew: CrewInput!): Crew!
    deleteCrew(id: Int!): Int
    updateCrew(id: Int!, crew: CrewInput!): Crew!
    login(credentials: LoginInput!): String!
`;