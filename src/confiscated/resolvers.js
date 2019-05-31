import { generalRequest, getRequest } from '../utilities';
import { url, port } from './server';

const URL_ITEMS = `http://${url}:${port}/confiscated_ms/items/`;
const URL_CATEGORY = `http://${url}:${port}/confiscated_ms/category/`;
const URL_DELIVERY = `http://${url}:${port}/confiscated_ms/delivery/`;

const resolvers = {
	Query: {
		allItems: (_) =>
			getRequest(URL_ITEMS, ''),
		itemById: (_, { id }) =>
			generalRequest(`${URL_ITEMS}/${id}/`, 'GET'),
		allCategories: (_) =>
			getRequest(URL_CATEGORY, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL_CATEGORY}/${id}/`, 'GET'),
		allDeliveries: (_) =>
			getRequest(URL_DELIVERY, ''),
		deliveryById: (_, { id }) =>
			generalRequest(`${URL_DELIVERY}/${id}/`, 'GET'),
	},
	
	Mutation: {
		createItem: (_, { item }) =>
			generalRequest(`${URL_ITEMS}`, 'POST', item ),
		updateItem: (_, { id, item }) =>
			generalRequest(`${URL_ITEMS}/${id}/`, 'PUT', item),
		deleteItem: (_, { id }) =>
			generalRequest(`${URL_ITEMS}/${id}/`, 'DELETE'),
			
		createCategory: (_, { category }) =>
			generalRequest(`${URL_CATEGORY}`, 'POST', category ),
		updateCategory: (_, { id, category }) =>
			generalRequest(`${URL_CATEGORY}/${id}/`, 'PUT', category),
		deleteCategory: (_, { id }) =>
			generalRequest(`${URL_CATEGORY}/${id}/`, 'DELETE'),
			
		createDelivery: (_, { delivery }) =>
			generalRequest(`${URL_DELIVERY}`, 'POST', delivery ),
		updateDelivery: (_, { id, delivery }) =>
			generalRequest(`${URL_DELIVERY}/${id}/`, 'PUT', delivery),
		deleteDelivery: (_, { id }) =>
			generalRequest(`${URL_DELIVERY}/${id}/`, 'DELETE')
	}
};

export default resolvers;
