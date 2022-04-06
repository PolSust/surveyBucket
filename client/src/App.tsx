import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
		</Routes>
	);
}
