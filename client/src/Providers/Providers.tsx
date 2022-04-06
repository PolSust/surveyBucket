import ApolloProviderWrapper from "./ApolloProviderWrapper";
import MuiThemeProviderWrapper from "./MuiThemeProviderWrapper";

interface Props {
	children: React.ReactNode;
}

export default function Providers({ children }: Props) {
	return (
		<ApolloProviderWrapper>
			<MuiThemeProviderWrapper>{children}</MuiThemeProviderWrapper>
		</ApolloProviderWrapper>
	);
}
