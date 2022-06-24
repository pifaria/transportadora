import { useOrder } from "../../providers/order"
import { Container, Content } from "./styles"
import Header from '../../components/header'
import NoOrder from "../../components/noOrder"
import { Link } from "react-router-dom"
import Menu from "../../components/menu"
import { useMenu } from "../../providers/menu"

const OrdersPage = () => {
    const { newSearch, orderList } = useOrder()
    const { modal } = useMenu()

    const saveOrder = (data) => {
        newSearch(data)
    }

    return (
        <Container>
            {modal && <Menu/>}
            <Header/>
            <Content>
                {orderList.length > 0 ?
                    <div className="orderContent">
                        <span>Selecione a opção abaixo que comece igual seu e-mail</span>
                        <ul className="ordersList">
                            {orderList.map((order) => (
                                <li key={order.id}>
                                    <Link to={`/pedidos/${order.code}`}>
                                        <h3 onClick={() => saveOrder(order)}>{order.email.substring(0, 3)}***********</h3>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    :
                    <NoOrder/>
                }
            </Content>
        </Container>
    )
}

export default OrdersPage