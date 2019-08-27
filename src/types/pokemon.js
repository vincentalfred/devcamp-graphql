import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
  } from 'graphql';
  
  const DetailPokemonType = new GraphQLObjectType({
      name: 'DetailPokemonType',
      fields: {
          id: { type: GraphQLInt },
          name: { type: GraphQLString },
          height: { type: GraphQLInt },
          weight: { type: GraphQLInt },
      }
  })

  const PokemonType = new GraphQLObjectType({
      name: 'PokemonType',
      fields: {
       name: { type: GraphQLString },
       url: { type: GraphQLString },   
      }
  })

  const ListPokemonType = new GraphQLObjectType({
      name: 'ListPokemonType',
      fields: {
          count: { type: GraphQLInt },
          previous: { type: GraphQLString },
          next: { type: GraphQLString },
          results: { type: new GraphQLList(PokemonType) },
      }
  })

  export { DetailPokemonType, PokemonType, ListPokemonType }