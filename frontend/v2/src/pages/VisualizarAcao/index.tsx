import { useEffect, useState } from "react";
import "./style.css";
import { Acao } from "@/types/Acao";
import { useParams } from "react-router-dom";
import AcaoService from "@/services/AcaoService";
import Header from "@/components/Header";

export default function VisualizarAcao() : JSX.Element {
	const [acao, setAcao] = useState<Acao | undefined>(undefined);

	const { id } = useParams<{id : string}>();

	useEffect(() => {
		if (id) {
			AcaoService.get(Number(id)).then((res) => {
				const data : Acao = res.data;
				setAcao(data);
				
			})
		}
		console.log(acao?.criador.nome)
	}, [id]);

	return (
		<>
			<Header />
			<div className="container">
				<div className="card mb-3" style={{ maxWidth: '100%' }}>
					<div className="row g-0">
						<div className="col-md-6">
							IMAGEM
						</div>
					</div>
					<div className="col-md-6">
                    <div
                        className="card-body d-flex flex-column mb-4 align-items-center"
                    >
                        <button
                            type="button"
                            className="btn btn-warning w-75 p-3 m-3"
                        >
                            Quero ser voluntário
                        </button>
                        <p className="card-text p-1">
                            Criada por: {acao?.criador.nome}
                        </p>
                        <p className="card-text p-1">Local: {acao?.endereco}</p>
                        <p className="card-text p-1">
                            Data de início: LALALALA MINHA CABEÇA TA PISCANDO
                        </p>
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
