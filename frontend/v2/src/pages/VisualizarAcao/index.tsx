import './style.css'
import { Acao } from '@/types/Acao'
import AcaoService from '@/services/AcaoService'
import UsuarioService from '@/services/UsuarioService'
import { useEffect, useState } from 'react'
//import { useParams } from 'node_modules/react-router-dom/dist/index'
//import { toast } from 'node_modules/react-hot-toast/dist/index'

function VisualizarAcao () {
    const [userCriador, setUserCriador] = useState(null);
    const [ acao, setAcao ] = useState<Acao>();
    //const { id } = useParams<{id: string}>();

    const id = 1

    useEffect (() => {
        AcaoService.get(Number(id))
            .then(({ data }: { data: Acao }) => {
                setAcao(data)
            })
            .catch((err) => {
                console.error(err)
                //toast.error('Erro ao encontrar ação.')
            })
    }, [id])

    useEffect(() => {
        async function fetchUser() {
            if (acao) {
                const userData = await UsuarioService.get(acao.criador)
                setUserCriador(userData)
            }
        }
        fetchUser()
    }, [acao?.criador])

    return (
        <div>
            Visualizar Ação <br/> {acao}
        </div>
    )
}

export default VisualizarAcao