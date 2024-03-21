import Header from '@/components/Header'
import './style.css'
import { Acao
 } from '@/types/Acao'
interface VisualizarAcaoInterface {
    acao: Acao
}

function VisualizarAcao (props: VisualizarAcaoInterface) {

    return (
        <div>
            <Header></Header>
            <div className="container">teste</div>
        </div>
    )
}

export default VisualizarAcao