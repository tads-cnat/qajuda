import logo from "@/assets/img/logo/logo_header.svg";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import SearchBar from "../SearchBar";

function Header() {
	const navigate = useNavigate();

	return (
		<nav className="navbar  header">
			<div className="w-100 d-flex align-items-center justify-content-between header-container">
				<div className="d-flex">
					<a
						className="navbar-brand"
						href="#"
					>
						<img
							src={logo}
							className="logo me-4"
							alt="QAjuda"
						/>
					</a>
					<SearchBar placeholder="Busque uma ação ou categoria" />
				</div>
				<div className="d-flex justify-content-evenly">
					<div className="d-flex align-items-center">
						<Link
							className="btn btn-primary me-3"
							to="/sobre"
						>
							Quem Somos
						</Link>
						<Link
							className="btn btn-primary me-3"
							to="/criar-acao"
						>
							Criar Ação
						</Link>
					</div>

					<div className="d-flex flex-column">
						<Link
							to="/cadastro"
							className="text-decoration-none text-white text-bold fw-bold"
						>
							Cadastro
						</Link>
						<Link
							to="/login"
							className="text-decoration-none text-white"
						>
							Login
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
