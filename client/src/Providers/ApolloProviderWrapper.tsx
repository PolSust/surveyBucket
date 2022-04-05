import React from "react";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "https://48p1r2roz4.sse.codesandbox.io",
	cache: new InMemoryCache(),
});

client
	.query({
		query: gql`
			query GetRates {
				rates(currency: "USD") {
					currency
				}
			}
		`,
	})
	.then((result) => console.log(result));

interface Props {
	children: React.ReactNode;
}

export default function ApolloProviderWrapper({ children }: Props) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
