import { getModelForClass, prop } from "@typegoose/typegoose";
import { gql } from "apollo-server-core";

export const UserTypeDef = gql`
	extend type Query {
		user(id: ID!): User
		users: [User]
	}

	extend type Mutation {
		register(user: UserInput): User
		login(email: String, password: String): AuthResponse
	}

	type AuthResponse {
		accessToken: String
	}

	input UserInput {
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
	public id!: string;

	@prop()
	public username!: string;

	@prop()
	public email!: string;

	@prop()
	public password!: string;
}

export const UserModel = getModelForClass(User);
