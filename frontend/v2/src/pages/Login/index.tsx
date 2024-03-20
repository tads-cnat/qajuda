import Logo from "@/assets/img/logo/logoqajuda.png"
import "./style.css"
import { useForm } from "react-hook-form"
import LoginService from "@/services/LoginService"
import { useState } from "react"

import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import { useAuth } from "@/contexts/AuthContext"
import Header from "@/components/Header"

interface LoginInterface {
	username: string
	password: string
}

function Login () {
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
					navigate("/produtos");
				}, 500);
			})
			.catch(() => {
				setIsLoading(false);
				toast.error("Houve um erro na hora de efetuar seu login");
			});
	}
    
    return (
		<div>
			<Header></Header>
			<div className="login-page">
				<div className=" bg-white d-flex justify-content-center align-items-center">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="row">
							<div className="mb-3">
								<label
									htmlFor="username"
									className="form-label fw-bold"
								>
									Usuário:
								</label>
								<input
									type="text"
									className="form-control"
									id="username"
									{...register("username")}
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="mb-3">
								<label
									htmlFor="password"
									className="form-label fw-bold"
								>
									Senha:
								</label>
								<input
									type="password"
									className="form-control"
									id="password"
									{...register("password")}
									required
								/>
							</div>
						</div>
						<div className="mb-3 d-flex justify-content-end">
							<button className="btn btn-success" id="login-button">
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
			</div>
		</div>
    )
}

export default Login