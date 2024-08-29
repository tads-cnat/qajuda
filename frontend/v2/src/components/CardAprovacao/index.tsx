import SolicitacaoService from "@/services/SolicitacaoService";
import "./style.css";
import { calcAge } from "@/utils/calcAge";
import toast from "react-hot-toast";

interface IProps {
	id : number | undefined,
	foto : string,
	nome : string,
	dataNascimento : Date,
	endereco : string,
	situacao : string,
}

function CardAprovacao(props : IProps) {
	const handleAceitar = () => {
		SolicitacaoService.aceitar(Number(props.id)).then((res) => {
			toast.success(res.data);
			window.location.reload();
		});
	}

	const handleRecusar = () => {
		SolicitacaoService.rejeitar(Number(props.id)).then((res) => {
			toast.success(res.data);
			window.location.reload();
		});
	}

	return (
		<>
			<div className="d-flex justify-content-between align-items-center bg-primary rounded-pill py-3 px-1 text-white bold">
				<div className="foto">
				</div>
				<div className="fs-5 ">{props.nome}</div>
				<div className="fs-5 ">{calcAge(props.dataNascimento)}</div>
				<div className="fs-5">{props.endereco}</div>
				{
					(props.situacao == 'em_espera') ? (
						<div className="d-flex g-2 pe-3">
							<button
								type="button"
								className="botao botao-aceitar"
								onClick={handleAceitar}
							/>
							<button
								type="button"
								className="botao botao-recusar"
								onClick={handleRecusar}
							/>
						</div>
					) : (
						(props.situacao == 'aceito') ? (
							<div className="fs-5 me-5" ><span className="badge rounded-pill bg-success p-3">Aceita</span></div>
						) : (
							<div className="fs-5 me-5" ><span className="badge rounded-pill bg-danger p-3">Rejeitada</span></div>
						)
						
					)
				}
				
			</div>
		</>
	);
}

export default CardAprovacao;
