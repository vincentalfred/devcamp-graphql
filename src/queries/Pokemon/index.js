import { GraphQLInt, GraphQLString } from 'graphql';
import { listPokemon, detailPokemon } from '../../models/pokemon';
import { ListPokemonType, DetailPokemonType } from '../../types/pokemon';

const GetListPokemon = {
    type: ListPokemonType,
    args: {
        limit: { type: GraphQLInt, defaultValue: 10 },
        offset: { type: GraphQLInt, defaultValue: 0},
    },
    resolve: listPokemon,
}

const GetDetailPokemon = {
    type: DetailPokemonType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
    },
    resolve: detailPokemon, 
}

export { GetListPokemon, GetDetailPokemon };