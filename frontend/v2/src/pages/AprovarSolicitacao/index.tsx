import Header from "@/components/Header";
import "./style.css";
import CardAprovacao from "@/components/CardAprovacao";
import { useEffect, useState } from "react";
import { Colaborador } from "@/types/Colaborador";
import AcaoService from "@/services/AcaoService";
import { useParams } from "react-router-dom";

function AprovarSolicitacao() {
    const [listVoluntario, setListVoluntario] = useState<Colaborador[]>([]);
    const { id } = useParams<{id : string}>();

    function fetchData() : void {
        AcaoService.getSolicitacoes(Number(id))
            .then((res) => {
                const data : Colaborador[] = res.data;
                setListVoluntario(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <section className="container">
                <div className="d-flex align-items-center mt-5 mb-5">
                    <h2 className="p-2 w-100">Lista de voluntários pendentes</h2>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg p-2 flex-shrink-1"
                    >
                        Voltar
                    </button>
                </div>
                {listVoluntario.map((voluntario) => (
                    <div className="mb-4" key={voluntario.id}>
                        <CardAprovacao id={voluntario.id} foto={voluntario.foto} endereco={voluntario.endereco} idade={21} nome={voluntario.nome} />
                    </div>
                ))}

                <div className="mb-4">
                    <CardAprovacao id={1} foto="../../assets/img/icones/userpadrao.png" endereco="Mipibu" idade={21} nome="Arthur" />
                </div>
            </section>

        </>
    )
}

export default AprovarSolicitacao;