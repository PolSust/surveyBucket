import React from "react";
import ApolloProviderWrapper from "./ApolloProviderWrapper";

interface Props {
	children: React.ReactNode;
}

export default function Providers({ children }: Props) {
	return <ApolloProviderWrapper>{children}</ApolloProviderWrapper>;
}
