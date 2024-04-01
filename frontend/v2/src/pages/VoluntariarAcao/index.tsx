import Header from "@/components/Header";
import "./style.css";

// Importar o componente da barra de menu
function VoluntariarAcao() {
	return (
		<>
			<Header />
			<section className="container">
				<h2 className="my-4">Confirmação de voluntariado</h2>
				<div className="d-grid gap-2 d-md-flex flex-column align-items-md-center">
					<p>
						Confirmo o compartilhamento de alguns dos meus dados
						sensíveis com o(s) proprietário(s) dessa ação, bem com
						nome, contato, etc...
					</p>
					<p>
						Aceito os termos de uso Lorem Ipsum é simplesmente uma
						simulação de texto da indústria tipográfica e de
						impressos, e vem sendo utilizado desde o século XVI,
						quando um impressor desconhecido pegou uma bandeja de
						tipos e os embaralhou para fazer um livro de modelos de
						tipos. Lorem Ipsum sobreviveu não só a cinco séculos,
						como também ao salto para a editoração eletrônica,
						permanecendo essencialmente inalterado. Se popularizou
						na década de 60, quando a Letraset lançou decalques
						contendo passagens de Lorem Ipsum, e mais recentemente
						quando passou a ser integrado a softwares de editoração
						eletrônica como Aldus PageMaker.
					</p>
					<p>
						É um fato conhecido de todos que um leitor se distrairá
						com o conteúdo de texto legível de uma página quando
						estiver examinando sua diagramação. A vantagem de usar
						Lorem Ipsum é que ele tem uma distribuição normal de
						letras, ao contrário de "Conteúdo aqui, conteúdo aqui",
						fazendo com que ele tenha uma aparência similar a de um
						texto legível. Muitos softwares de publicação e editores
						de páginas na internet agora usam Lorem Ipsum como
						texto-modelo padrão, e uma rápida busca por 'lorem
						ipsum' mostra vários websites ainda em sua fase de
						construção. Várias versões novas surgiram ao longo dos
						anos, eventualmente por acidente, e às vezes de
						propósito (injetando humor, e coisas do gênero).
					</p>
					<section>
						<button
							type="button"
							className="btn btn-success"
						>
							QUERO SER VOLUNTÁRIO
						</button>
					</section>
				</div>
			</section>
		</>
	);
}

export default VoluntariarAcao;
