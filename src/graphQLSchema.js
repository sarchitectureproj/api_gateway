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
	deckTypeDef	// Aca agregen lo mismo de arriba para su servicio
} from './deck/typeDefs';
import deckResolvers from './deck/resolvers';

// Aca agregen su servicioResolvers


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		crewTypeDef,
		deckTypeDef,
		// servicioTypeDef
	],
	[
		crewQueries,
		deckQueries,
		// servicioQ|ueries
	],
	[
		crewMutations,
		deckMutations,
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
