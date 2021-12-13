export interface Resolvers {
	Query?: Resolver;
	Mutation?: Resolver;
}

interface Resolver {
	[key: string]: (
		parent: unknown,
		args: never,
		context?: ApolloContext,
		info?: unknown
	) => unknown;
}

interface ApolloContext {
	[key: string]: unknown;
}
