import ImageUploadField from "@/components/Dropzone/ImageUploadField";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";

export default function CriarAcao(): JSX.Element {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => {
		console.log(data);
		reset();
	};
	return (
		<>
			<Header />
			<div className="container-lg container-md">
				<div className="row m-5 d-flex justify-content-center">
					<div className="col-8">
						<h2 className="mb-5">Criar ação de voluntariado</h2>

						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="row w-100 d-flex justify-content-center g-2 w-75">
								<div className="form-floating col-12">
									<input
										type="text"
										className="form-control"
										placeholder="Digite o nome da ação"
										id="nome"
										{...register("nome")}
									/>
									<label htmlFor="nome">Nome da ação</label>
								</div>
								<div className="form-floating col-12 ">
									<select
										className="form-select"
										id="tema"
										aria-label="Tema da alção"
										defaultValue="#"
										{...register("tema")}
									>
										<option value="#">
											Selecione o tema da ação.
										</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
									<label htmlFor="tema">Tema da ação</label>
								</div>
								<div className="form-floating col-12">
									<input
										type="text"
										className="form-control"
										placeholder="Digite a categoria"
										id="categoria"
										{...register("categoria")}
									/>
									<label htmlFor="categoria">Categoria</label>
								</div>
								<div className="form-floating col-12">
									<input
										type="text"
										className="form-control"
										placeholder="Digite o local da ação"
										id="local"
										{...register("local")}
									/>
									<label htmlFor="local">Local</label>
								</div>
								<div className="form-floating col-12">
									<input
										type="datetime-local"
										className="form-control"
										placeholder="Informe a data de início da ação"
										id="inicio"
										{...register("inicio")}
									/>
									<label htmlFor="inicio">
										Início da ação
									</label>
								</div>
								<div className="form-floating col-12">
									<input
										type="datetime-local"
										className="form-control"
										placeholder="Informe a data de fim da ação"
										id="fim"
										{...register("fim")}
									/>
									<label htmlFor="fim">Fim da ação</label>
								</div>
								<div className="form-floating col-12">
									<textarea
										className="form-control"
										placeholder="Informe a descrição da ação"
										id="descricao"
										style={{ height: "100px" }}
										{...register("descricao")}
									></textarea>
									<label htmlFor="descricao">
										Decrição da ação
									</label>
								</div>
								<div className="col-12">
									<ImageUploadField
										placeholder="Clique para selecionar uma imagem."
										control={control}
										name="foto"
									/>
								</div>
								<div className="col-6"></div>
								<div className="col-6 d-grid">
									<button className="btn btn-primary">
										Cadastrar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
