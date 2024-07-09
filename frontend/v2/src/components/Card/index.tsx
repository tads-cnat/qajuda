import styles from "./card.module.css";

function Card() {
	return (
		<div className="col d-flex flex-column px-2">
			<img
				src="https://placehold.co/400x600"
				className={`mb-4 ${styles.cardImg}`}
			/>
			<p
				className="text-muted fw-lighter mb-0"
				style={{ fontSize: "15px" }}
			>
				Categoria
			</p>
			<h5 className="fw-normal">Título do card</h5>
			<p className="text-muted">
				Descrição do artigo vai aqui. Lorem ipsum dolor sit amet.
			</p>
			<div className="d-flex ">
				<img
					src="https://placehold.co/400x400"
					alt=""
					className="rounded-circle me-3"
					style={{ height: "60px" }}
				/>
				<div className="d-flex align-items-center">
					<p>Nome Completo do Autor</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
