import { useOrder } from "../../providers/order"
import { Container, Content } from "./styles"
import Header from "../../components/header"
import { useVerification } from "../../providers/verification"
import Verification from "../../components/verification"
import { useMenu } from "../../providers/menu"
import Menu from "../../components/menu"

const MyOrder = () => {
    const { order } = useOrder()
    const { modal } = useMenu()
    const { verification } = useVerification()

    return (
        <Container>
            <Header/>
            {verification === false &&
                <Verification/>
            }
            {modal && <Menu/>}
            <Content>
                <h1>Informações de rastreio</h1>
                <section>
                    <div>
                        <label>HAWB</label>
                        <h3>{order.HAWB}</h3>
                    </div>
                    <div>
                        <label>Código do cliente</label>
                        <h3>{order.code}</h3>
                    </div>
                    <div>
                        <label>Situação atual</label>
                        <h3>{order.tracking}</h3>
                    </div>
                    <div>
                        <label>Cliente</label>
                        <h3>{order.client}</h3>
                    </div>
                </section>
            </Content>
            
        </Container>
    )
}

export default MyOrder