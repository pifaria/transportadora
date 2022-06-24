import Header from "../../components/header";
import { Container, Content, AnimationContainer } from "./styles";
import Form from "../../components/form";
import { useMenu } from "../../providers/menu";
import Menu from "../../components/menu";
import Topics from "../../components/topics";

const Home = () => {
    const { modal } = useMenu()

    return (
        <Container>
            {modal && <Menu/>}
            <Header/>
            <Content>
                <section>
                    <h1>Rastreie sua encomenda</h1>
                    <Form/>
                </section>
                <AnimationContainer>
                    <img
                        alt="caminhão de transporte"
                        src="https://www.flashcourier.com.br/img/track.png"
                    />    
                </AnimationContainer>
                <Topics/>           
            </Content>
        </Container>
    )
}

export default Home