import Button from "../../components/button"
import Header from "../../components/header"
import Menu from "../../components/menu"
import { useMenu } from "../../providers/menu"
import { Container, Content } from "./styles"

const Contact = () => {
    const { modal } = useMenu()

    return (
        <Container>
            {modal && <Menu/>}
            <Header/>
            <Content>
                <div>
                    <h1>Enviar uma solicitação</h1>
                    <span>Entre em contato conosco</span>
                </div>
                <form>
                    <input
                        placeholder="E-mail"
                    />
                    <input
                        placeholder="Motivo do contato"
                    />
                    <textarea 
                        placeholder="Mensagem"
                    />
                    <Button>Enviar</Button>
                </form>
            </Content>
        </Container>
    )
}

export default Contact