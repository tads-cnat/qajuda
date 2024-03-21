import "./style.css"
import { useForm } from "react-hook-form"
import LoginService from "@/services/LoginService"
import { useState } from "react"
import logo from "@/assets/img/logo/logoqajuda.svg"
import art from "@/assets/img/login-screen.svg"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import { useAuth } from "@/contexts/AuthContext"

interface LoginInterface {
	username: string
	password: string
}

function Login() {
	const { login } = useAuth();
	const { register, handleSubmit } = useForm<LoginInterface>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const navigate = useNavigate();

	function onSubmit(data: LoginInterface) {
		console.log(data);

		setIsLoading(true);
		LoginService.getToken(data)
			.then((res) => {
				setIsLoading(false);
				toast.success("Logado com sucesso!");
				const { access, refresh } = res.data;
				login(access, refresh);
				setTimeout(() => {
					navigate("/");
				}, 500);
			})
			.catch(() => {
				setIsLoading(false);
				toast.error("Houve um erro na hora de efetuar seu login");
			});
	}

	return (
		<div className="container-fluid login-page">
			<div className="row h-100">
				<div className="col-lg-6 col-md-12 bg-white d-flex flex-column justify-content-center align-items-center">
					<img src={logo} className="mb-3" style={{ maxWidth: "150px" }} alt="Logo do QAjuda" />
					<h2 className="mb-5">Bem-vindo de volta</h2>
					<form className="w-50" onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<input
								type="text"
								className="form-control"
								id="username"
								{...register("username")}
								required
								placeholder="Seu nome de usuário"
							/>
						</div>
						<div className="mb-3">
							<input
								type="password"
								className="form-control"
								id="password"
								placeholder="Sua senha"
								{...register("password")}
								required
							/>
						</div>
						<div className="d-grid gap-2">
							<button className="btn btn-primary" id="login-button">
								{isLoading ? (
									<div
										className="spinner-border spinner-border-sm"
										role="status"
									/>
								) : (
									"ENTRAR"
								)}
							</button>
						</div>
					</form>
				</div>
				<div className="col-lg-6 right-login d-flex justify-content-center">
					<img src={art} height="100%" />
				</div>
			</div>
		</div>
	)
}

export default Login