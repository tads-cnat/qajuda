import logo from "@/assets/img/logo/logo-invertido.png";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import SearchBar from "../SearchBar";
import toast from "react-hot-toast";
import { useAuth } from "@/contexts/useAuth";

function Header() {
	const navigate = useNavigate();
	const { user, isAuthenticated, logout } = useAuth();

	function handleLogout() {
		logout();
		toast.success("Usuário deslogado");
		setTimeout(() => {
			navigate("/");
		}, 500);
	}
	console.log(user);

	return (
		<nav className="navbar header">
			<div
				className="w-100 d-flex align-items-center justify-content-between header-container"
				style={{ maxHeight: "50px" }}
			>
				<div className="d-flex">
					<a
						className="navbar-brand"
						href="#"
					>
						<img
							src={logo}
							className="logo me-4"
							alt="QAjuda"
							height="50px"
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

					{isAuthenticated ? (
						<a
							onClick={handleLogout}
							className="text-decoration-none"
							style={{ cursor: "pointer" }}
						>
							<p className="text-md-end text-white lh-1 my-0">
								Olá,
							</p>
							<p className="fw-bold text-white lh-1 my-0">
								{user?.user.first_name}
							</p>
						</a>
					) : (
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
					)}
				</div>
			</div>
		</nav>
	);
}

export default Header;
