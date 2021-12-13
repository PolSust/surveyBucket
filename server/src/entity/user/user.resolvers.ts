import { Resolvers } from "../../apolloTypes";
import { User, UserModel } from "./user.types";

export const UserResolvers: Resolvers = {
	Query: {
		user: async (_, { id }: { id: string }) => await UserModel.findById(id),
		users: async () => await UserModel.find(),
	},
	Mutation: {
		createUser: async (_, { user }: { user: User }): Promise<User> => {
			await UserModel.create(user);
			return user;
		},
	},
};
