import { generalRequest, getRequest } from '../utilities';
import { url, port } from './server';

const URL_TAGS = `http://${url}:${port}/tags`;
const URL_LUGGAGES = `http://${url}:${port}/luggages`;

const resolvers = {
	Query: {
		allTags: (_) =>
			getRequest(URL_TAGS, ''),
		tagById: (_, { id }) =>
            generalRequest(`${URL_TAGS}/${id}`, 'GET'),
        allLuggages: (_) =>
            getRequest(URL_LUGGAGES, ''),
        luggageById: (_, { id })=>
            generalRequest(`${URL_LUGGAGES}/${id}`, 'GET')
	},
	Mutation: {
		createTag: (_, { tag }) =>
			generalRequest(`${URL_TAGS}`, 'POST', tag),
		updateTag: (_, { id, tag }) =>
			generalRequest(`${URL_TAGS}/${id}`, 'PUT', tag),
		deleteTag: (_, { id }) =>
            generalRequest(`${URL_TAGS}/${id}`, 'DELETE'),
        createLuggage: (_, { luggage }) =>
			generalRequest(`${URL_LUGGAGES}`, 'POST', luggage),
		updateLuggage: (_, { id, luggage }) =>
			generalRequest(`${URL_LUGGAGES}/${id}`, 'PUT', luggage),
		deleteLuggage: (_, { id }) =>
			generalRequest(`${URL_LUGGAGES}/${id}`, 'DELETE')
	}
};

export default resolvers;
