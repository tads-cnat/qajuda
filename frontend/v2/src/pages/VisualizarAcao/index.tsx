import { useEffect, useState } from "react";
import { Acao } from "@/types/Acao";
import { useNavigate, useParams } from "react-router-dom";
import AcaoService from "@/services/AcaoService";
import Header from "@/components/Header";
import { formatDate } from "@/utils/formatDate";

export default function VisualizarAcao() : JSX.Element {
	const [acao, setAcao] = useState<Acao | undefined>(undefined);
	const navigate = useNavigate();

	const { id } = useParams<{id : string}>();

	useEffect(() => {
		if (id) {
			AcaoService.get(Number(id)).then((res) => {
				const data : Acao = res.data;
				setAcao(data);
			})
		}
	}, [id]);

	const navigateVoluntariar = () => {
		navigate('/voluntariar-acao/'+id);
	}

	return (
		<>
			<Header />
			<div className="container">
				<div className="card mb-3 mt-5" style={{ maxWidth: '100%' }}>
					<div className="row g-0">
						<div className="col-md-6">
							<img src={acao?.foto.foto} className="img-fluid rounded-start" alt="" />
						</div>
					
						<div className="col-md-6">
						<div
							className="card-body d-flex flex-column mb-4 align-items-center"
						>
							<button
								type="button"
								className="btn btn-primary w-75 p-3 m-3 mt-5"
								onClick={navigateVoluntariar}
							>
								Quero ser voluntário
							</button>
							
							<p className="card-text p-1">
								<b>Criada por:</b> {acao?.criado_por.nome}
							</p>

							<p className="card-text p-1"><b>Local</b>: {acao?.endereco}</p>

							<p className="card-text p-1">
								<b>Data de início:</b> {formatDate(acao?.inicio)}
							</p>

							{acao?.fim?
							<p className="card-text p-1">
								<b>Data de fim:</b> {formatDate(acao?.fim)}
							</p>:
							""}
						</div>
					</div>
                </div>
				</div>
				<div>
					<h2>{acao?.nome}</h2>
					<p>{acao?.descricao}</p>
				</div>
			</div>
		</>
	);
}
