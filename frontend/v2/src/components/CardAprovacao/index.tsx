import "./style.css";

interface IProps {
	id : number | undefined,
	foto : string,
	nome : string,
	dataNascimento : Date,
	endereco : string,
}

function CardAprovacao(props : IProps) {
	function calcularIdade(dataNascimento: Date): number {
		const hoje = new Date();
		const aniversario = new Date(dataNascimento);

		const diferencaAnos = hoje.getFullYear() - aniversario.getFullYear();
	  
		const aniversarioEsteAno = new Date(hoje.getFullYear(), aniversario.getMonth(), aniversario.getDate());

		return hoje >= aniversarioEsteAno ? diferencaAnos : diferencaAnos - 1;
	  }

	const handleAceitar = () => {
		console.log('Aceito, id = '+props.id);
	}

	const handleRecusar = () => {
		console.log('Recusado, id = '+props.id);
	}

	return (
		<>
			<div className="d-flex justify-content-between align-items-center bg-primary rounded-pill py-3 px-1">
				<div className="foto">
					<img src={props.foto} alt="Foto de perfil" />
				</div>
				<div className="fs-5 ">{props.nome}</div>
				<div className="fs-5 ">{calcularIdade(props.dataNascimento)}</div>
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
