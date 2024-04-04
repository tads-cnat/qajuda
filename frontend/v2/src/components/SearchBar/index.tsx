import { useState } from "react";
import "./style.css";

interface SearchBarInterface {
	placeholder: string;
}

function SearchBar(props: SearchBarInterface) {
	const { placeholder } = props;
	const [_, setValue] = useState<string>("");

	return (
		<div
			className="searchbar"
			style={{ minWidth: "400px" }}
		>
			<div className="p-1">
				<div className="input-group rounded-pill">
					<input
						type="search"
						placeholder={placeholder}
						className="form-control border-0 bg-light rounded-pill rounded-end"
						value=""
						onChange={(e) => setValue(e.target.value)}
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
			</div>
		</div>
	);
}

export default SearchBar;
