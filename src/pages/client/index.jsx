import Header from "../../components/header";
import { Container, Content } from "./styles";
import { useMenu } from "../../providers/menu";
import Menu from "../../components/menu";
import Button from "../../components/button";

const Client = () => {
    const { modal } = useMenu()

    return (
        <Container>
            {modal && <Menu/>}
            <Header/>
            <Content>
                <div>
                    <h1>Faça seu login</h1>
                    <span>Consulte seus pedidos</span>
                </div>
                <form>
                    <input
                        placeholder="E-mail"
                    />
                    <input
                        placeholder="Senha"
                    />
                    <Button>Entrar</Button>
                </form>
            </Content>
        </Container>
    )
}

export default Client