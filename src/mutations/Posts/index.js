import { GraphQLInt } from 'graphql';
import { deletePost } from '../../models/post';
import { PostType } from '../../types/post';

const DeletePost = {
  type: PostType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: deletePost,
};

export { DeletePost };