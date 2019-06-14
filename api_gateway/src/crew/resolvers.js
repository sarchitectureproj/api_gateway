import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allCrew: (_) =>
			getRequest(URL, ''),
		crewById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createCrew: (_, { crew }) =>
			generalRequest(`${URL}`, 'POST', {crew:crew}),
		updateCrew: (_, { id, crew }) =>
			generalRequest(`${URL}/${id}`, 'PUT', {crew:crew}),
		deleteCrew: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;