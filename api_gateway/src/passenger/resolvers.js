import { generalRequest, getRequest } from '../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}/passengers`;

const resolvers = {
	Query: {
		allPassengers: (_) =>
			getRequest(URL, ''),
		passengerById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createPassenger: (_, { passenger }) =>
			generalRequest(`${URL}`, 'POST', passenger),
		updatePassenger: (_, { id, passenger }) =>
			generalRequest(`${URL}/${id}`, 'PUT', passenger),
		deletePassenger: (_, { id }) =>
            		generalRequest(`${URL}/${id}`, 'DELETE'),
	}
};

export default resolvers;