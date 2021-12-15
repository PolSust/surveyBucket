import { ExpressContext } from "apollo-server-express";
export interface Resolvers {
	Query?: Resolver;
	Mutation?: Resolver;
}

interface Resolver {
	[key: string]: (
		parent: unknown,
		args: never,
		context: ExpressContext,
		info: unknown
	) => unknown;
}