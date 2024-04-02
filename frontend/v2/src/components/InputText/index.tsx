import { useFormContext } from "react-hook-form";

interface InputInterface
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string;
	name: string;
}

function InputText(props: InputInterface) {
	const { name, label, placeholder, type } = props;
	const {
		formState: { errors },
		register,
	} = useFormContext();

	return (
		<>
			<input
				type={type}
				className={`form-control ${errors[name] && "is-invalid"}`}
				placeholder={placeholder}
				{...register(name)}
			/>
			<label htmlFor={name}>{label}</label>
			<div className="invalid-feedback">
				{errors[name]?.message?.toString()}
			</div>
		</>
	);
}

export default InputText;
