import { useCallback, useMemo, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";

const baseStyle: React.CSSProperties = {
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "20px",
	borderWidth: 2,
	borderRadius: 2,
	borderColor: "#eeeeee",
	borderStyle: "dashed",
	backgroundColor: "#fafafa",
	color: "#bdbdbd",
	outline: "none",
	transition: "border .24s ease-in-out",
};

const focusedStyle = {
	borderColor: "#2196f3",
};

const acceptStyle = {
	borderColor: "#00e676",
};

const rejectStyle = {
	borderColor: "#ff1744",
};

interface ImageUploadFieldProps {
	placeholder: string;
	name: string;
	control: any;
}

function ImageUploadField(props: ImageUploadFieldProps) {
	const { placeholder, control, name } = props;

	const [myFiles, setMyFiles] = useState<FileWithPath[]>([]);

	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) =>
			setMyFiles([...myFiles, ...acceptedFiles]),
		[myFiles]
	);

	const {
		getRootProps,
		getInputProps,
		isFocused,
		isDragAccept,
		isDragReject,
		acceptedFiles,
		inputRef,
	} = useDropzone({ accept: { "image/*": [] }, onDrop });

	const removeFile = (file: FileWithPath) => () => {
		const newFiles = [...myFiles];
		newFiles.splice(newFiles.indexOf(file), 1);
		setMyFiles(newFiles);
	};

	const removeAll = () => {
		setMyFiles([]);
		if (inputRef.current) inputRef.current.value = "";
		acceptedFiles.length = 0;
		acceptedFiles.splice(0, acceptedFiles.length);
	};

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isFocused ? focusedStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isFocused, isDragAccept, isDragReject]
	);

	const files = acceptedFiles.map((file: FileWithPath) => <p>{file.path}</p>);
	return (
		<Controller
			render={({ field: { onChange } }) => {
				const onChangeValue = (e: any) => onChange("ok");
				return (
					<div {...getRootProps({ className: "dropzone", style })}>
						<input
							{...getInputProps({
								onChange: () => {
									console.log("ok");
								},
							})}
						/>
						{files.length <= 0 ? (
							<>
								<p>Arraste e solte suas fotos aqui</p>
								<button
									type="button"
									className="btn btn-primary"
								>
									Procurar foto
								</button>
							</>
						) : (
							<>
								{files}
								<button
									type="button"
									className="btn btn-outline-primary"
									onClick={removeAll}
								>
									Escolher outra
								</button>
							</>
						)}
					</div>
				);
			}}
			name={name}
			control={control}
		/>
	);
}

export default ImageUploadField;
