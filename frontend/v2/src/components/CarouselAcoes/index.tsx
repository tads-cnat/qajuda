import styles from "./carousel.module.css";
import { uniqueId } from "lodash";
import { Acao } from "@/types/Acao";

interface CarouselAcoesProps {
	acoes: Acao[];
}

function CarouselAcoes(props: CarouselAcoesProps): JSX.Element {
	const { acoes } = props;
	const carouselId = uniqueId("carousel-");

	return (
		<div
			id={carouselId}
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators">
				{acoes.map((_, key) => {
					return (
						<button
							type="button"
							data-bs-target={`#${carouselId}`}
							data-bs-slide-to={key}
							className="active"
							aria-current="true"
						/>
					);
				})}
			</div>
			<div className="carousel-inner">
				{acoes.map((a: Acao) => {
					return (
						<div
							className="carousel-item active"
							style={{ height: "40vh" }}
						>
							<img
								src={
									a.foto.foto ??
									"https://placehold.co/600x400"
								}
								className={`d-block w-100 ${styles.carouselImg}`}
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>{a.nome}</h5>
							</div>
						</div>
					);
				})}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target={`#${carouselId}`}
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				/>
				<span className="visually-hidden">Anterior</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target={`#${carouselId}`}
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				/>
				<span className="visually-hidden">Próximo</span>
			</button>
		</div>
	);
}

export default CarouselAcoes;
