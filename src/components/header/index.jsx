import { Container, Content } from "./styles";
import { FiMenu } from 'react-icons/fi'
import { Link, useHistory } from "react-router-dom";
import { useMenu } from "../../providers/menu";
import { useOrder } from "../../providers/order";
import { useVerification } from "../../providers/verification";

const Header = () =>{
    const { openModal } = useMenu()
    const { setOrderList, newSearch } = useOrder()
    const { verification, setVerification } = useVerification()

    const history = useHistory()

    const handleRedirect = () =>{
        newSearch({})
        setOrderList([])
        setVerification(false)
        return history.push('/')
    }

    return (
        <Container>
            <Content>
                <img 
                    alt="logo" 
                    src="https://www.flashcourier.com.br/img/brand.png" 
                    onClick={handleRedirect}
                />
                <FiMenu size={40} onClick={openModal}/>
                <nav>
                    <Link>Quem somos</Link>
                    <Link>Ações sociais</Link>
                    <Link>Contato</Link>
                    <Link>Área do cliente</Link>
                    <Link></Link>
                </nav>
            </Content>
        </Container>
    )
}

export default Header