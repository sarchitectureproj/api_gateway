import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';


import {
	crewMutations,
	crewQueries,
	crewTypeDef
} from './crew/typeDefs';
import crewResolvers from './crew/resolvers';

// DECKS
import {
	deckMutations,
	deckQueries,
	deckTypeDef,

	cabinMutations,
	cabinQueries,
	cabinTypeDef,
	
	meetingPointMutations,
	meetingPointQueries,
	meetingPointTypeDef,
	// Aca agregen lo mismo de arriba para su servicio
} from './deck/typeDefs';
import deckResolvers from './deck/resolvers';

// Aca agregen su servicioResolvers


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		crewTypeDef,
		
		deckTypeDef,
		cabinTypeDef,
		meetingPointTypeDef,
		
		// servicioTypeDef
	],
	[
		crewQueries,
		
		deckQueries,
		cabinQueries,
		meetingPointQueries,
		// servicioQ|ueries
	],
	[
		crewMutations,

		deckMutations,
		cabinMutations,
		meetingPointMutations,
		// servicioMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		crewResolvers,
		deckResolvers,
		// servicioResolvers
	)
});
