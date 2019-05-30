export const deckTypeDef = `
type Deck {
    _id: String!
    floor: Int!
    meeting_schedule: String
    meeting_point_id: String
}
input DeckInput {
    floor: Int!
    meeting_schedule: String
    meeting_point_id: String
}`;
export const deckQueries = `
    allDeck: [Deck]!
    deckById(id: String!): Deck!
    cabinsBydeckId(id: String!): [Cabin!]
`;

export const deckMutations = `
    createDeck(deck: DeckInput!): Deck!
    deleteDeck(id: String!): String
    updateDeck(id: String!, deck: DeckInput!): Deck!
`;


//cabins

export const cabinTypeDef = `
type Cabin {
    _id: String!
    capacity: Int!
    category: String!
    deck_id: String
    postion: String
}
input CabinInput {
    capacity: Int!
    category: String!
    deck_id: String
    position: String
}`;

export const cabinQueries = `
    allCabin: [Cabin]!
    cabinById(id: String!): Cabin!
`;
export const cabinMutations = `
    createCabin(cabin: CabinInput!): Cabin!
    deleteCabin(id: String!): String
    updateCabin(id: String!, cabin: CabinInput!): Cabin!
`;

//meting points
export const meetingPointTypeDef = `
type MeetingPoint {
    _id: String!
    name: String
}
input MeetingPointInput {
    name: String!
}`;

export const meetingPointQueries = `
    allMeetingPoint: [MeetingPoint]!
    meetingPointById(id: String!): MeetingPoint!
`;
export const meetingPointMutations = `
    createMeetingPoint(meeting_point: MeetingPointInput!): MeetingPoint!
    deleteMeetingPoint(id: String!): String
    updateMeetingPoint(id: String!, meeting_point: MeetingPointInput!): MeetingPoint!
`;
