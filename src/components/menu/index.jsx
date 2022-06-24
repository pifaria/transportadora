import { useHistory } from "react-router-dom"
import { useMenu } from "../../providers/menu"
import { useOrder } from "../../providers/order"
import { useVerification } from "../../providers/verification"
import { Container, Content } from "./styles"

const Menu = () => {
    const { closeModal } = useMenu()
    const { setOrderList, newSearch } = useOrder()
    const { verification, setVerification } = useVerification()

    const history = useHistory()
    
    const handleRedirect = (page) =>{
        closeModal()
        return history.push(`${page}`)
    }


    const handleHome = () =>{
        closeModal()
        newSearch({})
        setOrderList([])
        setVerification(false)
        return history.push('/')
    }

    return (
        <Container>
            <Content>
                <header>
                    <img 
                        alt="Logo" 
                        src="https://www.flashcourier.com.br/img/brand.png" 
                        onClick={handleHome}
                    />
                    <label onClick={closeModal}>X</label>
                    
                </header>
                    <div>
                        <h4 onClick={() => handleRedirect('/perfil')}>Quem somos</h4>
                        <h4 onClick={() => handleRedirect('/acoes-sociais')}>Ações sociais</h4>
                        <h4 onClick={() => handleRedirect('/contato')}>Contato</h4>
                        <h4 onClick={() => handleRedirect('/area-cliente')}>Aréa do cliente </h4>
                    </div>
            </Content>
        </Container>
    )
}

export default Menu