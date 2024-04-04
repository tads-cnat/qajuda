import "./App.css";
import "bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";

import Login from "./pages/Login";
import VisualizarAcao from "./pages/VisualizarAcao";
import VoluntariarAcao from "./pages/VoluntariarAcao";
import CriarAcao from "./pages/CriarAcao";
import Homepage from "./pages/Homepage";

function App(): JSX.Element {
	return (
		<>
			<AuthProvider>
				<Toaster />
				<Router>
					<Routes>
						<Route
							path="/"
							element={<Homepage />}
						/>
						<Route
							path="/sobre"
							element={<h1>Sobre</h1>}
						/>
						<Route
							path="/cadastro"
							element={<h1>Cadastro</h1>}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/criar-acao"
							element={<CriarAcao />}
						/>
						<Route
							path="/visualizar-acao/:id"
							element={<VisualizarAcao />}
						/>
						<Route
							path="/voluntariar-acao"
							element={<VoluntariarAcao />}
						/>
					</Routes>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
