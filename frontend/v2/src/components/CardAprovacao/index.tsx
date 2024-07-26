import "./style.css";

function CardAprovacao() {
    return (
        <>
            <div
                className="d-flex justify-content-between align-items-center cartao"
            >
                <div className="foto col-1">
                    {/* FOTO AQUI */}
                </div>
                <div className="info col-3">
                    PRIMEIRO NOME
                </div>
                <div className="info col-3">
                    IDADE
                </div>
                <div className="info col-3">BAIRRO</div>
                <div id="botao col-2">
                    <button
                        type="button"
                        className="botao botao-aceitar"
                        
                    ></button>
                    <button
                        type="button"
                        className="botao botao-recusar"
                    ></button>
                </div>
            </div>
        </>
    )
}

export default CardAprovacao