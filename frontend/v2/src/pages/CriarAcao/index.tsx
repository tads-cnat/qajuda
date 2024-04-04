import ImageUploadField from "@/components/ImageUploadField";
import Header from "@/components/Header";
import AcaoService from "@/services/AcaoService";
import CategoriaService from "@/services/CategoriaService";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputText from "@/components/InputText";
import Select from "@/components/Select";

const schema = yup.object().shape({
	nome: yup.string().required("O campo nome é obrigatório"),
	descricao: yup.string().required("O campo descrição é obrigatório"),
	local: yup.string().required("O campo local é obrigatório"),
	tema: yup.string().required("O campo tema é obrigatório"),
	max_volunt: yup
		.number()
		.integer("O campo deve ser um número inteiro")
		.typeError("O campo deve ser um número")
		.min(1, "Não é possível ter menos que 1 voluntário")
		.required("O campo max_volunt é obrigatório"),
	inicio: yup
		.date()
		.typeError("Informe uma data válida")
		.required("O campo início é obrigatório"),
	fim: yup
		.date()
		.typeError("Informe uma data válida")
		.required("O campo fim é obrigatório"),
	categoria: yup
		.number()
		.typeError("Selecione uma categoria válida")
		.required("O campo categoria é obrigatório"),
});

export default function CriarAcao(): JSX.Element {
	const [categorias, setCategorias] = useState<any[]>([]);

	const methods = useForm({ resolver: yupResolver(schema) });
	const onSubmit = (data: any) => {
		AcaoService.post(data)
			.then((res) => {
				toast.success("Ação cadastrada com sucesso!");
				console.log(res);
			})
			.catch((err) => {
				toast.error("Houve um erro ao cadastrar a ação!");
			});
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
						<FormProvider {...methods}>
							<form onSubmit={methods.handleSubmit(onSubmit)}>
								<div className="row w-100 d-flex justify-content-center g-2 w-75">
									<div className="form-floating col-12">
										<InputText
											placeholder="Digite o nome da ação"
											label="Nome da ação"
											type="text"
											name="nome"
										/>
									</div>
									<div className="form-floating col-12 ">
										<Select
											name="categoria"
											label="Selecione uma categoria"
											options={categorias}
										/>
									</div>
									<div className="form-floating col-8">
										<InputText
											placeholder="Informe qual o tema"
											label="Tema"
											type="text"
											name="tema"
										/>
									</div>
									<div className="form-floating col-4">
										<InputText
											placeholder="Qual o número máximo de voluntários"
											label="Máximo de Voluntários"
											type="number"
											name="max_volunt"
										/>
									</div>
									<div className="form-floating col-12">
										<InputText
											placeholder="Informe o local da ação"
											label="Local"
											type="text"
											name="local"
										/>
									</div>
									<div className="form-floating col-6">
										<InputText
											placeholder="Informe a data de início da ação"
											label="Início da ação"
											type="datetime-local"
											name="inicio"
										/>
									</div>
									<div className="form-floating col-6">
										<InputText
											placeholder="Informe a data de fim da ação"
											label="Fim da ação"
											type="datetime-local"
											name="fim"
										/>
									</div>
									<div className="form-floating col-12">
										<textarea
											className={`form-control ${
												methods.formState.errors
													?.descricao && "is-invalid"
											}`}
											placeholder="Informe a descrição da ação"
											id="descricao"
											style={{ height: "100px" }}
											{...methods.register("descricao")}
										></textarea>
										<label htmlFor="descricao">
											Decrição da ação
										</label>
										<div className="invalid-feedback">
											{methods.formState.errors?.descricao?.message?.toString()}
										</div>
									</div>
									<div className="col-12">
										<ImageUploadField
											placeholder="Clique para selecionar uma imagem."
											control={methods.control}
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
						</FormProvider>
					</div>
				</div>
			</div>
		</>
	);
}
