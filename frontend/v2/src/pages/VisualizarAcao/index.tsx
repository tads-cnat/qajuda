import "./style.css";
import { Acao } from "@/types/Acao";
import AcaoService from "@/services/AcaoService";
import ColaboradorService from "@/services/ColaboradorService";
import { useEffect, useState } from "react";
import { Colaborador } from "@/types/Colaborador";
import Header from "@/components/Header";

//import { useParams } from 'node_modules/react-router-dom/dist/index'
//import { toast } from 'node_modules/react-hot-toast/dist/index'

function VisualizarAcao() {
	const [, setColaboradorCriador] = useState<Colaborador>();
	const [acao, setAcao] = useState<Acao>();
	//const { id } = useParams<{id: string}>();

	const id = 1;

	useEffect(() => {
		AcaoService.get(Number(id))
			.then(({ data }: { data: Acao }) => {
				console.log("Dados: ", data);
				setAcao(data);
			})
			.catch((err) => {
				console.error(err);
				//toast.error('Erro ao encontrar ação.')
			});
	}, [id]);

	console.log("Criador: ", acao?.criador);

	useEffect(() => {
		ColaboradorService.get(Number(acao?.criador))
			.then(({ data }: { data: Colaborador }) => {
				console.log("Dados criador: ", data);
				setColaboradorCriador(data);
			})
			.catch((err) => {
				console.error(err);
				//toast.error('Erro ao encontrar ação.')
			});
	}, [id, acao]);

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
                            Criada por: PRIMEIRO NOME
                            ULTIMO NOME
                        </p>
                        <p className="card-text p-1">Local: LOCAL</p>
                        <p className="card-text p-1">
                            Data de início: DATA
                        </p>
                    </div>
                </div>
				</div>
				<div>
					<h2>NOME</h2>
					<p>DESCRIÇÃO</p>
				</div>
			</div>
		</>
	);
}

export default VisualizarAcao;
