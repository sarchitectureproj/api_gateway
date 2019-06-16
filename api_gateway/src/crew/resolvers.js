import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
var jwt = require('jsonwebtoken')

const URL = `http://${url}:${port}/${entryPoint}/crew`;
const URL_AUTH = `http://${url}:${port}/${entryPoint}/authenticate`;

const crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
	password = 'd6F3Efeq';
	
function decrypt(text){
	var decipher = crypto.createDecipher(algorithm,password)
	var dec = decipher.update(text,'hex','utf8')
	dec += decipher.final('utf8');
	return dec;
}

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
			generalRequest(`${URL}/${id}`, 'DELETE'),
		login: async (_, { credentials }) =>{
			// let pass = decrypt(credentials.password);
			// credentials.password = pass;
			let res = await	generalRequest(`${URL_AUTH}`, 'POST', credentials)
			console.log(res)
			if(res){
				if(res === 'Ok'){
					var token = await jwt.sign({username: res}, 'Secret Password', {expiresIn: 60 * 60 * 24})
					return token
				}else{
					return '-1'
				}				
			}else{
				return '-1'
			}
		}
	}
};

export default resolvers;