import CarouselAcoes from "@/components/CarouselAcoes";
import Header from "@/components/Header";
import AcaoService from "@/services/AcaoService";
import { Acao } from "@/types/Acao";
import { useEffect, useState } from "react";

function Homepage() {
	const [acoesCarousel, setAcoesCarousel] = useState<Acao[]>([]);

	useEffect(() => {
		AcaoService.getAll()
			.then(({ data }) => {
				console.log(data);
				setAcoesCarousel(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<CarouselAcoes acoes={acoesCarousel} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Homepage;
