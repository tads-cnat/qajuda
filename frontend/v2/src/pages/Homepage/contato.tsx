interface ContatoProps {
	icon: string;
	title: string;
	content: string;
	contact: string;
}

function Contato(props: ContatoProps) {
	const { icon, title, content, contact } = props;
	return (
		<div className="col">
			<div className="mb-5">
				<i
					className={`fa-solid fa-regular fa-${icon} fa-2xl`}
					style={{ fontSize: "60px" }}
				/>
			</div>
			<h2 className="fw-semibold">{title}</h2>
			<p>{content}</p>
			<p className="text-decoration-underline">{contact}</p>
		</div>
	);
}

export default Contato;
