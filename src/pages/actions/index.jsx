import ActionsImgs from '../../components/actionsImgs'
import Header from '../../components/header'
import Menu from '../../components/menu'
import { useMenu } from '../../providers/menu'
import { Container, Content } from './styles'

const Actions = () => {
    const { modal } = useMenu()
    
    return (
        <Container>
            {modal && <Menu/>}
            <Header/>
            <Content>
                <h1>
                    Ações e Projetos sociais
                </h1>
                <article>
                    <p>
                    Como parte da nossa visão, sempre nos preocupamos em retribuir para a sociedade um pouco daquilo que recebemos, pois acreditamos que
                    </p>
                    <span>
                        pequenas ações podem mudar o mundo.
                    </span>
                    <p>
                        Dessa forma, ajudamos alguns projetos e instituições sociais e queremos, além de apresentá-los, dar a oportunidade de você ajudar também!
                    </p>
                </article>
                <section>
                    <ActionsImgs/>
                </section>
            </Content>
        </Container>
    )
}

export default Actions