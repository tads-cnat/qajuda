import { Option } from "@/types/Option";
import { useFormContext } from "react-hook-form";
import uniqueId from "lodash/uniqueId";

interface SelectProps
	extends React.DetailedHTMLProps<
		React.SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	label?: string;
	name: string;
	options: Option[];
}

function Select(props: SelectProps) {
	const selectId = uniqueId("select-");
	const { name, label, options } = props;
	const {
		formState: { errors },
		register,
	} = useFormContext();

	return (
		<>
			<select
				className={`form-select ${errors[name] && "is-invalid"}`}
				id={selectId}
				aria-label={label}
				defaultValue="#"
				{...register(name)}
			>
				<option value="#">{label}</option>
				{options.map((c, key) => (
					<option
						key={key}
						value={c.id}
					>
						{c.nome}
					</option>
				))}
			</select>
			<div className="invalid-feedback">
				{errors[name]?.message?.toString()}
			</div>
			<label htmlFor={selectId}>{label}</label>
		</>
	);
}

export default Select;
