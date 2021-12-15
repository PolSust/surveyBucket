import { Resolvers } from "../../apolloTypes";
import { AuthResponse } from "@survey-bucket/shared/src/entity.types/user";
// how to effie export
import { User, UserModel } from "./user.types";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { ApolloError } from "apollo-server";
import { decodedToken } from "../../authenticate";

export const UserResolvers: Resolvers = {
	Query: {
		user: async (_, { id }: { id: string }) => await UserModel.findById(id),
		users: async (_: unknown, asdf: unknown, context) => {
			const token = decodedToken(context.req);
			console.log(token);

			await UserModel.find();
		},
	},
	Mutation: {
		register: async (_, { user }: { user: User }): Promise<AuthResponse> => {
			const hashedPassword = await bcrypt.hash(user.password, 10);
			user.password = hashedPassword;

			await UserModel.create(user);
			return {
				accessToken: sign({ userId: user.id }, "asdasdasdasda"),
			};
		},

		login: async (
			_,
			{ email, password }: { email: string; password: string },
			context
		): Promise<AuthResponse> => {
			const userFromDb = await UserModel.findOne({ email });

			if (userFromDb === null) {
				throw new ApolloError("This user does not exist");
			}

			const passwordIsCorrect = await bcrypt.compare(
				password,
				userFromDb.password
			);

			if (!passwordIsCorrect) {
				throw new ApolloError("Invalid credentials");
			}

			return {
				accessToken: sign({ userId: userFromDb.id }, "asdasdasasd", {
					expiresIn: "1h",
				}),
			};
		},
	},
};
