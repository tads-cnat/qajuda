import CarouselAcoes from "@/components/CarouselAcoes";
import Header from "@/components/Header";

function Homepage() {
	return (
		<>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<CarouselAcoes />
					</div>
				</div>
			</div>
		</>
	);
}

export default Homepage;
