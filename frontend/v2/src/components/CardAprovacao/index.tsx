import "./style.css";

function CardAprovacao() {
	return (
		<>
			<div className="d-flex justify-content-between align-items-center bg-primary rounded-pill py-3 px-1">
				<div className="foto">{/* FOTO AQUI */}</div>
				<div className="fs-5 ">Fulaninho das Quintas</div>
				<div className="fs-5">27 anos</div>
				<div className="fs-5">Alecrim</div>
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
