import { uniqueId } from "lodash";
interface AccordionItemProps {
	children: React.ReactNode;
	label: string;
}

function AccordionItem(props: AccordionItemProps) {
	const { label, children } = props;
	const itemId = uniqueId("-");
	return (
		<div className="accordion-item">
			<h2
				className="accordion-header"
				id={`flush-heading${itemId}`}
			>
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#flush-collapse${itemId}`}
					aria-expanded="false"
					aria-controls={`flush-collapse${itemId}`}
				>
					{label}
				</button>
			</h2>
			<div
				id={`flush-collapse${itemId}`}
				className="accordion-collapse collapse show"
				aria-labelledby={`flush-heading${itemId}`}
			>
				<div className="accordion-body">{children}</div>
			</div>
		</div>
	);
}

export default AccordionItem;
