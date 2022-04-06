import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import React from "react";

interface Props {
	children: React.ReactNode;
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#6C9A8B",
		},
		secondary: {
			main: "#E8998D",
		},
	},
});

export default function MuiThemeProviderWrapper({ children }: Props) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
