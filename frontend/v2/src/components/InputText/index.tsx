import { useEffect } from "react";
import {
	DeepMap,
	FieldError,
	InputValidationRules,
	useFormContext,
} from "react-hook-form";

interface InputInterface
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string;
	name: string;
}

function InputText(props: InputInterface) {
	const { name, label, placeholder } = props;
	const {
		formState: { errors },
		register,
	} = useFormContext();

	return (
		<>
			<input
				type="text"
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
