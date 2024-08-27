import Accordion from "@/components/Accordion";
import AccordionItem from "@/components/Accordion/AccordionItem";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Contato from "./contato";
import Footer from "@/components/Footer";
import alfabetizacaopcd from "@/assets/img/mural/alfabetizacao-pcd.jpg";
import alfabetizacao from "@/assets/img/mural/alfabetizacao.jpg";
import animais from "@/assets/img/mural/animais.jpg";
import aula from "@/assets/img/mural/aula.jpg";

function Homepage() {
	return (
		<>
			<Header />
			<div className="container-lg">
				<section className="row p-5">
					<div className="d-flex align-items-center col-6 ">
						<div className="p-5">
							<h1 className="fw-bolder mb-5">
								Conectando voluntários a projetos comunitários
								de forma segura
							</h1>
							<p className="mb-5">
								A plataforma QAjuda tem como missão conectar
								voluntários a projetos comunitários,
								proporcionando um ambiente seguro e confiável
								para colaboração e interação entre indivíduos,
								instituições e comunidades interessadas em
								organizar e participar de atividades
								voluntárias.
							</p>
							<div className="d-flex">
								<button className="btn btn-outline-primary me-3">
									Saiba mais
								</button>
								<button className="btn btn-primary">
									Inscreva-se
								</button>
							</div>
						</div>
					</div>
					<div className="col-6 d-flex justify-content-center">
						<img
							src={alfabetizacaopcd}
							alt=""
							className="img-fluid"
						/>
					</div>
				</section>
				<section className="p-5">
					<div className="row">
						<div className="col-7">
							<h2 className="fw-bold">
								Projetos de Voluntariado Disponíveis
							</h2>
							<p>
								Confira alguns exemplos de projetos de
								voluntariado disponíveis para participação ou
								inspiração.
							</p>
						</div>
					</div>
					<div className="row row-cols-3 ">
						<Card
							foto={alfabetizacao}
							categoria={"Categoria"}
							nome={"Ação 1"}
							descricao={"Descrição 1"}
							nome_criador={"Criador 1"}
						/>
						<Card
							foto={animais}
							categoria={"Categoria"}
							nome={"Ação 2"}
							descricao={"Descrição 2"}
							nome_criador={"Criador 2"}
						/>
						<Card
							foto={aula}
							categoria={"Categoria"}
							nome={"Ação 3"}
							descricao={"Descrição 3"}
							nome_criador={"Criador 3"}
						/>
					</div>
					<div className="d-flex justify-content-end">
						<button className="btn btn-outline-primary">
							Ver tudo
						</button>
					</div>
				</section>
				<section
					className="p-5"
					id="contato"
				>
					<div className="row mb-5">
						<div className="col-7">
							<h2 className="fw-bold">Entre em contato</h2>
							<p>
								Estamos aqui para ajudar você. Entre em contato
								conosco para obter suporte e atendimento.
							</p>
						</div>
					</div>
					<div className="row row-cols-2 ">
						<Contato
							title="E-mail"
							contact="hello@qajuda.com"
							content="Envie-nos uma mensagem e responderemos o mais rápido possível."
							icon="envelope"
						/>
						<Contato
							title="Telefone"
							contact="+55 (11) 1234-5678"
							content="Ligue para nós durante o horário comercial para obter assistência imediata."
							icon="phone"
						/>
					</div>
				</section>
				<section className="p-5 row d-flex justify-content-center">
					<div className="col-9">
						<h2 className="fw-bold text-center mb-3">
							Perguntas frequentes
						</h2>
						<p className="text-center py-3">
							Encontre respostas para as perguntas mais comuns
							sobre como nossa plataforma funciona e sobre
							voluntariado em geral.
						</p>

						<Accordion id="acordeao-perguntas-frequentes">
							<AccordionItem label="Como posso me cadastrar?">
								Para se cadastrar, basta acessar nossa
								plataforma e preencher o formulário de registro
								com suas informações pessoais.
							</AccordionItem>
							<AccordionItem label="Quais são os requisitos?">
								POs requisitos para ser voluntário podem variar
								de acordo com cada projeto. Geralmente, é
								necessário ter mais de 18 anos e disposição para
								ajudar.
							</AccordionItem>
							<AccordionItem label="Como encontrar projetos?">
								Você pode encontrar projetos disponíveis em
								nossa plataforma ao realizar uma busca por área
								de interesse ou localização.
							</AccordionItem>
							<AccordionItem label="Como entrar em contato?">
								Para entrar em contato conosco, você pode
								utilizar o formulário de contato em nosso site
								ou enviar um e-mail para o nosso suporte.
							</AccordionItem>
							<AccordionItem label="Como posso contribuir?">
								Você pode contribuir se voluntariando em
								projetos, divulgando nossa plataforma para mais
								pessoas ou fazendo uma doação para apoiar nossas
								atividades.
							</AccordionItem>
						</Accordion>
					</div>
				</section>
			</div>
		</>
	);
}

export default Homepage;
