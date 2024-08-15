import "./style.css";

interface IProps {
	id : number | undefined,
	foto : string,
	nome : string,
	idade : number,
	endereco : string,
}

function CardAprovacao(props : IProps) {
	return (
		<>
			<div className="d-flex justify-content-between align-items-center bg-primary rounded-pill py-3 px-1">
				<div className="foto">
					<img src={props.foto} alt="Foto de perfil" />
				</div>
				<div className="fs-5 ">{props.nome}</div>
				<div className="fs-5">{props.idade}</div>
				<div className="fs-5">{props.endereco}</div>
				<div className="d-flex g-2 pe-3">
					<button
						type="button"
						className="botao botao-aceitar"
					/>
					<button
						type="button"
						className="botao botao-recusar"
					/>
				</div>
			</div>
		</>
	);
}

export default CardAprovacao;
