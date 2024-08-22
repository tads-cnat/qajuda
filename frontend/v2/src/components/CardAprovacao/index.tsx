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
			<div className="d-flex justify-content-between align-items-center bg-primary rounded-pill py-3 px-1">
				<div className="foto">
					<img src={props.foto} alt="Foto de perfil" />
				</div>
				<div className="fs-5 ">{props.nome}</div>
				<div className="fs-5 ">{calcAge(props.dataNascimento)}</div>
				<div className="fs-5">{props.endereco}</div>
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
			</div>
		</>
	);
}

export default CardAprovacao;
