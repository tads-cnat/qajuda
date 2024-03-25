import Header from '@/components/Header'
import './style.css'
import { Acao } from '@/types/Acao'
import roupa from '@/assets/img/mural/roupa.jpg'
import calendario from '@/assets/img/icones/calendario.png'
import relogio from '@/assets/img/icones/relogio.png'
import mapa from '@/assets/img/icones/mapa.png'

interface VisualizarAcaoInterface {
    acao: Acao
}

function VisualizarAcao (props: VisualizarAcaoInterface) {

    return (
        <div>
            <Header></Header>
            <div className="container main">
                <br/>
                <div className="row mt-5">
                    <div className="col-6">
                        <img src={roupa} alt="" className="img-mural rounded-4" />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center">
                        <div className="row">
                            <p>223 pessoas já ajudaram essa ação</p>
                        </div>
                        <div className="row btn-voluntario">
                            <button>QUERO SER VOLUNTÁRIO</button>
                        </div>
                        <div className="row">
                            <p>Criada por: Caroline Macedo</p>
                        </div>
                        <div className="row">
                            <img src={mapa} alt="" className="icon"/>
                            <p>Armazém da Caridade, Natal/RN</p>
                        </div>
                        <div className="row d-flex mr-auto p-2">
                            <div className="d-flex p-2">
                                <img src={calendario} alt="" className="icon" />
                                <p>12/03/2023</p>
                            </div>
                            <div className="d-flex p-2">
                                <img src={relogio} alt="" className="icon" />
                                <p>09:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisualizarAcao