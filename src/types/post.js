import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean  } from "graphql";

const PostType = new GraphQLObjectType({
  name: "PostType",
  fields: {
    message: { type: GraphQLString },
    id: { type: GraphQLInt },
    success: { type: GraphQLBoolean },
  }
});

export { PostType };
