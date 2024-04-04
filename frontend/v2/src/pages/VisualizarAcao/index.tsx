import "./style.css";
import { Acao } from "@/types/Acao";
import AcaoService from "@/services/AcaoService";
import ColaboradorService from "@/services/ColaboradorService";
import { useEffect, useState } from "react";
import { Colaborador } from "@/types/Colaborador";

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

	return <></>;
}

export default VisualizarAcao;
