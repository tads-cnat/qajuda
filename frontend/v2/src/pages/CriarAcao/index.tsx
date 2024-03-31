import ImageUploadField from "@/components/ImageUploadField";
import Header from "@/components/Header";
import AcaoService from "@/services/AcaoService";
import CategoriaService from "@/services/CategoriaService";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CriarAcao(): JSX.Element {
	const [categorias, setCategorias] = useState<any[]>([]);

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => {
		AcaoService.post(data)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));

		reset();
	};

	useEffect(() => {
		CategoriaService.getAll()
			.then((res) => {
				setCategorias(res.data);
			})
			.catch((err) => console.error(err));
	}, []);
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
										id="categoria"
										aria-label="Categoria da ação"
										defaultValue="#"
										{...register("categoria")}
									>
										<option value="#">
											Selecione a categoria da ação.
										</option>
										{categorias.map((c, key) => (
											<option
												key={key}
												value={c.id}
											>
												{c.nome}
											</option>
										))}
									</select>
									<label htmlFor="categoria">
										Categoria da ação
									</label>
								</div>
								<div className="form-floating col-12">
									<input
										type="text"
										className="form-control"
										placeholder="Informe qual o tema"
										id="tema"
										{...register("tema")}
									/>
									<label htmlFor="tema">Tema</label>
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
