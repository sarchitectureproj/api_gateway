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
// Aca agregen lo mismo de arriba para su servicio

import crewResolvers from './crew/resolvers';
import luggageResolvers from './luggage/resolvers';
// Aca agregen su servicioResolvers


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		crewTypeDef,
		tagTypeDef,
		luggageTypeDef
		// servicioTypeDef
	],
	[
		crewQueries,
		tagQueries,
		luggageQueries
		// servicioQueries
	],
	[
		crewMutations,
		tagMutations,
		luggageMutations
		
		// servicioMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		crewResolvers,
		luggageResolvers
		// servicioResolvers
	)
});
