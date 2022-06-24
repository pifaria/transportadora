import { Container, Content } from "./styles";
import Header from '../../components/header'
import Menu from "../../components/menu";
import { useMenu } from "../../providers/menu";

const Profile = () => {
    const { modal } = useMenu()

    return(
        <Container>
            {modal && <Menu/>}
            <Header/>
            <Content>
                    <h1>Quem somos</h1>
                <div>
                    <img
                        alt="fotos da empresa"
                        src="https://www.flashcourier.com.br/img/about.png?v=1654813816"
                    />
                    <article>
                        <p>
                        A <i><b>Flash Courier</b></i> é referência em logística no Brasil e conta com mais de 1,6 mil colaboradores diretos 
                        e mais de 6,5 mil indiretos.
                        </p>
                        <p>
                            Líder no setor bancário, sua carteira de clientes é composta por bancos brasileiros, empresas de <i>e-commerce</i>, 
                            <i>fintechs</i>, meios de pagamento, empresas de ingresso, gestoras de benefícios, planos de saúde, entre outros segmentos.
                        </p>
                        <p>
                            Para se ter uma ideia da proporção da operação, sua malha de distribuição realiza mais de 10 milhões de entregas por mês em mais de 
                            48 mil endereços visitados por dia em todo o país, o que resulta em uma média de 15 entregas por segundo.
                        </p>
                    </article>
                </div>
            </Content>
        </Container>
    )
}

export default Profile