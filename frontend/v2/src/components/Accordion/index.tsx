interface AccordionProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	children: React.ReactNode;
}

function Accordion(props: AccordionProps) {
	const { children } = props;
	return (
		<div
			className="accordion accordion-flush"
			{...props}
		>
			{children}
		</div>
	);
}

export default Accordion;
