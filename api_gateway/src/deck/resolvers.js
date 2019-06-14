import { generalRequest, getRequest } from '../utilities';
import { url, port } from './server';

const URL_DECK = `http://${url}:${port}/decks`;
const URL_CABIN = `http://${url}:${port}/cabins`;
const URL_MP = `http://${url}:${port}/meeting_points`;

const resolvers = {
	Query: {
		//decks
		allDeck: (_) =>
			getRequest(URL_DECK, ''),
		deckById: (_, { id }) =>
			generalRequest(`${URL_DECK}/${id}`, 'GET'),
		cabinsBydeckId: (_, { id }) =>
		 	generalRequest(`${URL_DECK}/${id}/cabins`, 'GET'),
		//cabins
		allCabin: (_) =>
			getRequest(URL_CABIN, ''),
		cabinById: (_, { id }) =>
			generalRequest(`${URL_CABIN}/${id}`, 'GET'),
		//meeting points
		allMeetingPoint: (_) =>
			getRequest(URL_MP, ''),
		meetingPointById: (_, { id }) =>
			generalRequest(`${URL_MP}/${id}`, 'GET'),

	},
	Mutation: {
		//decks
		createDeck: (_, { deck }) =>
			generalRequest(`${URL_DECK}`, 'POST', { deck: deck }),
		updateDeck: (_, { id, deck }) =>
			generalRequest(`${URL_DECK}/${id}`, 'PUT', { deck: deck }),
		deleteDeck: (_, { id }) =>
			generalRequest(`${URL_DECK}/${id}`, 'DELETE'),

		//cabins
		createCabin: (_, { cabin }) =>
			generalRequest(`${URL_CABIN}`, 'POST', { cabin: cabin }),
		updateCabin: (_, { id, cabin }) =>
			generalRequest(`${URL_CABIN}/${id}`, 'PUT', { cabin: cabin }),
		deleteCabin: (_, { id }) =>
			generalRequest(`${URL_CABIN}/${id}`, 'DELETE'),

		//meeting points

		createMeetingPoint: (_, { meeting_point }) =>
			generalRequest(`${URL_MP}`, 'POST', { meeting_point: meeting_point }),
		updateMeetingPoint: (_, { id, meeting_point }) =>
			generalRequest(`${URL_MP}/${id}`, 'PUT', { meeting_point: meeting_point }),
		deleteMeetingPoint: (_, { id }) =>
			generalRequest(`${URL_MP}/${id}`, 'DELETE'),

	}
};

export default resolvers;
