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

import{
	itemMutations,
	itemQueries,
	itemTypeDef
} from './confiscated/typeDefs';

import{
	categoryMutations,
	categoryQueries,
	categoryTypeDef
} from './confiscated/typeDefs';

import{
	deliveryMutations,
	deliveryQueries,
	deliveryTypeDef
} from './confiscated/typeDefs';

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


// Aca agregen lo mismo de arriba para su servicio

import crewResolvers from './crew/resolvers';
import luggageResolvers from './luggage/resolvers';
import passengerResolvers from './passenger/resolvers';
import confiscatedResolvers from './confiscated/resolvers';
import crewResolvers from './crew/resolvers';

// Aca agregen su servicioResolvers


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		crewTypeDef,
		tagTypeDef,
		luggageTypeDef,
		passengerTypeDef,
		itemTypeDef,
		categoryTypeDef,
		deliveryTypeDef,		
		deckTypeDef,
		cabinTypeDef,
		meetingPointTypeDef,
		// servicioTypeDef
	],
	[
		crewQueries,
		tagQueries,
		luggageQueries,
		passengerQueries,
		itemQueries,
		categoryQueries,
		deliveryQueries,
		deckQueries,
		cabinQueries,
		meetingPointQueries,
		// servicioQueries
	],
	[
		crewMutations,
		tagMutations,
		luggageMutations,
		passengerMutations,
		itemMutations,
		categoryMutations,
		deliveryMutations,
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
		luggageResolvers,
		passengerResolvers,
		confiscatedResolvers,
		deckResolvers,
		// servicioResolvers
	)
});
