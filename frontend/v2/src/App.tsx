import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

import Login from "./pages/Login";
import CriarAcao from "./pages/CriarAcao";
import AutorizarVoluntarioAcao from "./pages/AutorizarVoluntarioAcao";

function App(): JSX.Element {
	return (
		<>
			<AuthProvider>
				<Toaster />
				<Router>
					<Routes>
						<Route
							path="/"
							element={<h1>Home</h1>}
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
							path="/autorizar-voluntario-acao"
							element={<AutorizarVoluntarioAcao />}
						/>
					</Routes>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
