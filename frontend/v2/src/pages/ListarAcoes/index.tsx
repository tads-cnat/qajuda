import Card from "@/components/Card";
import Header from "@/components/Header";
import AcaoService from "@/services/AcaoService";
import { Acao } from "@/types/Acao";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ListarAcoes () : JSX.Element {
    const [listAcao, setListAcao] = useState<Acao[]>([]);

    useEffect(() => {
        AcaoService.getAll().then((res) => {
            const data : Acao[] = res.data;
            setListAcao(data);
        })
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="row justify-content-center">
                    {listAcao.map(acao => (
                        <div key={acao.id} className="card-lista col-md-6 mt-5">
                            <Link
                                className="navbar-brand"
                                to={`/visualizar-acao/${acao.id}`}
                            >
                                <Card
                                    categoria={acao.categoria.nome}
                                    descricao={acao.descricao}
                                    foto={acao.foto.foto}
                                    nome={acao.nome}
                                    nome_criador={acao.criado_por.nome}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}