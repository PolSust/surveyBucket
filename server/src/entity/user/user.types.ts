import { getModelForClass, prop } from "@typegoose/typegoose";
import { gql } from "apollo-server-core";

export const UserTypeDef = gql`
	extend type Query {
		user(id: ID!): User
		users: [User]
	}

	extend type Mutation {
		createUser(user: CreateUserInput): User
	}

	input CreateUserInput {
		username: String!
		email: String!
		password: String!
	}

	type User {
		id: ID!
		username: String!
		email: String!
		password: String!
	}
`;

export class User {
	@prop()
	public username!: string;

	@prop()
	public email!: string;

	@prop()
	public password!: string;
}

export const UserModel = getModelForClass(User);
