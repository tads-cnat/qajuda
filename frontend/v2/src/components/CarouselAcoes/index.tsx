import styles from "./carousel.module.css";
import { uniqueId } from "lodash";
import { Acao } from "@/types/Acao";
import { Carousel } from "bootstrap";

interface CarouselAcoesProps {
	acoes: Acao[];
}

const baseUrl = import.meta.env.VITE_API_URL;

function CarouselAcoes(props: CarouselAcoesProps): JSX.Element {
	const { acoes } = props;
	const carouselId = uniqueId("carousel-");

	// const carousel = new Carousel(carouselId);

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
							key={key}
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
				{acoes.map((a: Acao, key) => {
					const fotoUrl = baseUrl + a.foto?.foto;
					return (
						<div
							className={`carousel-item ${
								key == 0 ? "active" : ""
							}`}
							style={{ height: "40vh" }}
							key={key}
						>
							<img
								src={fotoUrl}
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
