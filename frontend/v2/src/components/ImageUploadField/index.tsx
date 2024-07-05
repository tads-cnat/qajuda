import FotoService from "@/services/FotoService";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";
import toast from "react-hot-toast";

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
	const { placeholder, name, control } = props;
	const [myFiles, setMyFiles] = useState<FileWithPath[]>([]);
	const [disabled, setDisabled] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

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
	} = useDropzone({
		accept: { "image/*": [] },
		onDrop,
		disabled,
	});

	const removeAll = () => {
		setMyFiles([]);
		setIsLoading(false);
		setUploadSuccess(false);
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

	const files = acceptedFiles.map((file: FileWithPath, key: number) => (
		<p key={key}>{file.path}</p>
	));

	useEffect(() => {
		setDisabled(files.length > 0);
	}, [files]);

	return (
		<Controller
			render={({ field: { onChange } }) => {
				function upload() {
					setIsLoading(true);
					setUploadSuccess(false);
					const formDataBody = new FormData();
					formDataBody.append("foto", myFiles[0]);
					FotoService.post(formDataBody)
						.then((res) => {
							setIsLoading(false);
							setUploadSuccess(true);
							onChange(res.data.id);
							toast.success("Imagem carregada com sucesso!");
						})
						.catch((err) => console.error(err));
				}
				return (
					<div
						{...getRootProps({
							className: "dropzone",
							style,
						})}
					>
						<input {...getInputProps()} />
						{files.length <= 0 ? (
							<>
								<p>{placeholder}</p>
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
								<div className="d-flex">
									<button
										type="button"
										className="btn btn-outline-danger me-3"
										onClick={removeAll}
									>
										Remover foto
									</button>
									<button
										type="button"
										className="btn btn-success"
										onClick={upload}
									>
										{isLoading ? (
											<div
												className="spinner-border spinner-border-sm"
												role="status"
											/>
										) : uploadSuccess ? (
											<i className="fa-solid fa-check" />
										) : (
											<i className="fa-solid fa-cloud-arrow-up" />
										)}
									</button>
								</div>
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
