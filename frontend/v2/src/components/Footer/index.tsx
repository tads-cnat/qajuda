import logo from "@/assets/img/logo/logo-completo-invertido.png";
import "./style.css";

function Footer() {
	return (
		<section className="bg-primary p-5">
			<div className="container">
				<div className="row">
					<img
						src={logo}
						className="img-fluid"
						style={{ height: "70px", width: "auto" }}
					/>
				</div>

				<div className="d-flex text-white mt-3">
					<a
						className="text-white text-decoration-none me-3"
						href="#"
					>
						Sobre Nós
					</a>
					<a
						className="text-white text-decoration-none me-3"
						href="#contato"
					>
						Contato
					</a>
					<a
						className="text-white text-decoration-none me-3"
						href="#"
					>
						Sobre Nós
					</a>
				</div>
				<hr />
				<div className="d-flex text-white justify-content-between mt-3">
					<div>
						<a
							style={{ fontSize: "10px" }}
							className="me-3 text-white"
						>
							Política de Privacidade
						</a>
						<a
							style={{ fontSize: "10px" }}
							className="me-3 text-white"
						>
							Política de Privacidade
						</a>
						<a
							style={{ fontSize: "10px" }}
							className="me-3 text-white"
						>
							Política de Privacidade
						</a>
					</div>
					<p>© 2024 QAjuda. Todos os direitos reservados.</p>
				</div>
			</div>
		</section>
	);
}

export default Footer;
