import axios from 'axios';
import { API_POKEMON } from '../../constants';

const listPokemon = async (_, args) => {
  const offset = args.offset || 1;
  const limit = args.limit || 20;
  const result = await axios.get(`${API_POKEMON}/pokemon?offset=${offset}&limit=${limit}`);

  return {
    count: result.data.count,
    next: result.data.next,
    previous: result.data.previous,
    results: result.data.results,
  }
}

const getDetailPokemon = async (_, args) => {
  const name = args.name || '';
  const idPokemon = args.id || 0;
  const finalArgument = name ? name : idPokemon;

  const result = await axios.get(`${API_POKEMON}/pokemon/${finalArgument}`);

  return {
    id: result.data.id,
    name: result.data.name,
    order: result.data.order,
    height: result.data.height,
    weight: result.data.weight,
  }
}

export { listPokemon, getDetailPokemon };