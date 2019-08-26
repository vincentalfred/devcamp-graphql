import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import { listPokemon, getDetailPokemon } from '../../models/pokemon';
import { ListPokemonType, DetailPokemonType } from '../../types/pokemon';

const GetPokemon = {
  type: ListPokemonType,
  args: {
    limit: { type: GraphQLInt, defaultValue: 10 },
    offset: { type: GraphQLInt, defaultValue: 1 },
  },
  resolve: listPokemon,
}

const GetDetailPokemon = {
  type: DetailPokemonType,
  args: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
  resolve: getDetailPokemon,
};

export { GetPokemon, GetDetailPokemon };