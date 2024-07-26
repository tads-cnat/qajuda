import logo from "@/assets/img/logo/logo-invertido.png";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import SearchBar from "../SearchBar";
import toast from "react-hot-toast";
import { useAuth } from "@/contexts/useAuth";

function Header() {
	const { user, isAuthenticated, logout } = useAuth();
	const navigate = useNavigate();

	function handleLogout() {
		logout();
		navigate("/login");
		toast.success("Usuário deslogado");
	}

	return (
		<nav className="navbar navbar-expand-lg bg-primary navbar-dark bg-primary">
			<div className="container">
				<Link
					className="navbar-brand"
					to="/"
				>
					<img
						src={logo}
						height={"50px"}
						alt=""
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Abrir navegação"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/criar-acao"
							>
								Criar Ação
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/listar-acoes"
							>
								Ações Ativas
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/sobre"
							>
								Sobre Nós
							</Link>
						</li>
					</ul>
					<SearchBar placeholder="Busque por uma ação..." />
					<div
						className="d-flex"
						role="search"
					>
						<div className="d-flex flex-column justify-content-center">
							{isAuthenticated ? (
								<div className="dropdown-center">
									<button
										className="btn dropdown-toggle-split text-md-end text-white"
										type="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Olá,
										<br />
										<b>{user?.nome}</b>
									</button>
									<ul className="dropdown-menu">
										<li>
											<a
												className="dropdown-item text-body"
												onClick={handleLogout}
											>
												Sair
											</a>
										</li>
									</ul>
								</div>
							) : (
								<>
									<Link
										to="/cadastro"
										className="btn-hover text-decoration-none text-white text-start text-bold fw-bold px-2 py-1"
									>
										Cadastro
									</Link>
									<Link
										to="/login"
										className="btn-hover text-decoration-none text-start text-white px-2 py-1"
									>
										Login
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
