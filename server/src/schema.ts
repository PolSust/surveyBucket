import { gql } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import merge from "lodash.merge";
import { UserTypeDef } from "./entity/user/user.types";
import { UserResolvers } from "./entity/user/user.resolvers";

const Query = gql`
	type Query {
		_empty: String
	}
	type Mutation {
		_empty: String
	}
`;

export const schema = makeExecutableSchema({
	typeDefs: [Query, UserTypeDef],
	resolvers: merge(UserResolvers),
});
