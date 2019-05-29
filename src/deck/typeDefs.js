export const deckTypeDef = `
type Deck {
    id: String!
    floor: Int!
    meeting_schedule: String!
    meeting_point_id: String!
}
input DeckInput {
    floor: Int!
    meeting_schedule: String!
    meeting_point_id: String
}`;
export const deckQueries = `
    allDeck: [Deck]!
    deckById(id: String!): Deck!
`;

export const deckMutations = `
    createDeck(deck: DeckInput!): Deck!
    deleteDeck(id: String!): String
    updateDeck(id: String!, deck: DeckInput!): Deck!
`;


//cabins

export const cabinTypeDef = `
type cabin {
    id: String!
    capacity: Int!
    category: String!
    deck_id: String!
    postion: String!
}
input cabinInput {
    capacity: Int!
    category: String!
    deck_id: String!
    postion: String!
}`;

export const cabinQueries = `
    allCabin: [Cabin]!
    cabinById(id: String!): Cabin!
`;
export const cabinMutations = `
    createCabin(cabin: CabinInput!): Cabin!
    deleteCabin(id: String!): String
    updateCabin(id: String!, cabin: CabinInput!): cabin!
`;

//meting points
export const meetingPointTypeDef = `
type meeting_point {
    id: String!
    name: String!
}
input meetingPointInput {
    name: String!
}`;

export const meetingPointQueries = `
    allMeetingPoint: [MeetingPoint]!
    meetingPointById(id: String!): MeetingPoint!
`;
export const meetingPointMutations = `
    createMeetingPoint(meeting_point: meetingPointInput!): MeetingPoint!
    deleteMeetingPoint(id: String!): String
    updateMeetingPoint(id: String!, meeting_point: MeetingPointInput!): meeting_point!
`;
