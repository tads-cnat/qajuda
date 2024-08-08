import "./style.css";
import { useForm } from "react-hook-form";
import { createSearchParams, useNavigate } from "react-router-dom";

interface SearchBarInterface {
	placeholder: string;
}

interface SearchAcoesForm {
	query: string;
}

function SearchBar(props: SearchBarInterface) {
	const { placeholder } = props;
	const { register, handleSubmit } = useForm<SearchAcoesForm>();
	const navigate = useNavigate();

	function search(data: SearchAcoesForm): void {
		const { query } = data;

		navigate({
			pathname: "/listar-acoes",
			search: createSearchParams({
				q: query,
			}).toString(),
		});
	}

	return (
		<div
			className="searchbar"
			style={{ minWidth: "400px" }}
		>
			<div className="p-1">
				<form onSubmit={handleSubmit(search)}>
					<div className="input-group rounded-pill">
						<input
							{...register("query")}
							type="search"
							placeholder={placeholder}
							className="form-control border-0 bg-light rounded-pill rounded-end"
						/>
						<div className="input-group-append bg-light rounded-pill rounded-start py-1 px-2">
							<button
								type="submit"
								className="btn btn-link text-primary rounded-pill rounded"
							>
								<i className="fa fa-search" />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
