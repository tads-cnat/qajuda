import './style.css'
import { Acao } from '@/types/Acao'
import AcaoService from '@/services/AcaoService'
import UsuarioService from '@/services/UsuarioService'
import { useEffect, useState } from 'react'

interface VisualizarAcaoInterface {
    acao: Acao
}

function VisualizarAcao (props: VisualizarAcaoInterface) {
    const { nome, descricao, tema, criador, qtd_volunt, foto, local, inicio, fim } = props.acao
    const [userCriador, setUserCriador] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const userData = await UsuarioService.get(criador)
            setUserCriador(userData)
        }
        fetchUser()
    }, [criador])

    return (
        <div>
            Visualizar Ação
        </div>
    )
}

export default VisualizarAcao