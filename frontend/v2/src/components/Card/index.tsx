import { useEffect, useState } from "react";
import styles from "./card.module.css";
import CategoriaService from "@/services/CategoriaService";
import { Categoria } from "@/types/Categoria";

interface IProps {
	foto : string,
	categoria : string,
	nome : string,
	descricao : string,
	nome_criador : string,
}

function Card(props : IProps) {
	return (
		<div className="col d-flex flex-column px-2">
			<img
				src={props.foto}
				className={`mb-4 ${styles.cardImg}`}
			/>
			<p
				className="text-muted fw-lighter mb-0"
				style={{ fontSize: "15px" }}
			>
				{props.categoria}
			</p>
			<h5 className="fw-normal"><b>{props.nome}</b></h5>
			<div className="d-flex ">
				<div className="d-flex align-items-center">
					<p>{props.nome_criador}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
