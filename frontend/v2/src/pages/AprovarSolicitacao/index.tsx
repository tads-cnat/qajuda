import Header from "@/components/Header";
import "./style.css";
import CardAprovacao from "@/components/CardAprovacao";
import { useEffect, useState } from "react";
import AcaoService from "@/services/AcaoService";
import { useNavigate, useParams } from "react-router-dom";
import { Solicitacao } from "@/types/Solicitacao";

function AprovarSolicitacao() {
    const [listSolicitacao, setListSolicitacao] = useState<Solicitacao[]>([]);
    const { id } = useParams<{id : string}>();
    const navigate = useNavigate();

    function fetchData() : void {
        AcaoService.getSolicitacoes(Number(id))
            .then((res) => {
                const data : Solicitacao[] = res.data;
                setListSolicitacao(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleVoltar = () => {
        navigate('/visualizar-acao/'+id);
    }

    return (
        <>
            <Header />
            <section className="container">
                <div className="d-flex align-items-center mt-5 mb-5">
                    <h2 className="p-2 w-100">Lista de voluntários pendentes</h2>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg p-2 flex-shrink-1"
                        onClick={handleVoltar}
                    >
                        Voltar
                    </button>
                </div>
                {
                    (listSolicitacao.length == 0) ? (
                        <h5 className="p-2 w-100">Nenhuma solicitação pendente.</h5>
                    ) : 
                    listSolicitacao.map((solicitacao) => (
                        <div className="mb-4" key={solicitacao.id}>
                            <CardAprovacao id={solicitacao.id} foto={solicitacao.colaborador.foto} dataNascimento={solicitacao.colaborador.data_nascimento} endereco={solicitacao.colaborador.endereco} nome={solicitacao.colaborador.nome} situacao={solicitacao.status}/>
                        </div>
                    ))
                }
            </section>

        </>
    )
}

export default AprovarSolicitacao;