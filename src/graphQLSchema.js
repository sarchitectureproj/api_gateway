import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';


import {
	crewMutations,
	crewQueries,
	crewTypeDef
} from './crew/typeDefs';

import{
	luggageMutations,
	luggageQueries,
	luggageTypeDef
} from './luggage/typeDefs';

import{
	tagMutations,
	tagQueries,
	tagTypeDef
} from './luggage/typeDefs';

import{
	passengerMutations,
	passengerQueries,
	passengerTypeDef
} from './passenger/typeDefs';

// Aca agregen lo mismo de arriba para su servicio

import crewResolvers from './crew/resolvers';
import luggageResolvers from './luggage/resolvers';
import passengerResolvers from './passenger/resolvers';
// Aca agregen su servicioResolvers


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		crewTypeDef,
		tagTypeDef,
		luggageTypeDef,
		passengerTypeDef
		// servicioTypeDef
	],
	[
		crewQueries,
		tagQueries,
		luggageQueries,
		passengerQueries
		// servicioQueries
	],
	[
		crewMutations,
		tagMutations,
		luggageMutations,
		passengerMutations
		// servicioMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		crewResolvers,
		luggageResolvers,
		passengerResolvers
		// servicioResolvers
	)
});
