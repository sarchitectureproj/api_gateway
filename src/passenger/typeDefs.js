export const passengerTypeDef = `
type Passenger {
    _id: String!
    first_name: String!
    last_name: String!
    age: Int!
    gender: String!
    email: String!
    phone_number: String!
    birthdate: String!
    occupation: String!
    nationality: String!
    native_language: String!
}

input PassengerInput {
    first_name: String!
    last_name: String!
    age: Int!
    gender: String!
    email: String!
    phone_number: String!
    birthdate: String!
    occupation: String!
    nationality: String!
    native_language: String!
}`;

export const passengerQueries = `
    allPassengers: [Passenger]!
    passengerById(id: String!): Passenger!
`;

export const passengerMutations = `
    createPassenger(passenger: PassengerInput!): Passenger!
    deletePassenger(id: String!): String
    updatePassenger(id: String!, passenger: PassengerInput!): String!
`;