import { Container, Content } from "./styles"
import { TbTruckDelivery, TbBuildingWarehouse } from 'react-icons/tb' 
import { MdOutlineVerified } from 'react-icons/md'
import { FiSmartphone } from 'react-icons/fi'
import { TbMapSearch } from 'react-icons/tb'

const Topics = () => {
    return(
        <Container>
            <Content>
                <li>
                    <TbTruckDelivery/>
                    <h2>Eficiência</h2>
                    <p>
                        48.118 endereços visitados por dia em todo o país com uma média de 15 entregas por 
                        segundo.
                    </p>
                </li>
                <li>
                    <TbBuildingWarehouse/>
                    <h2>Estrutura</h2>
                    <p>
                        2 centros de distribuição localizados em São Bernardo do Campo/SP 
                        com mais de 20.000 e 7.800 m², respectivamente.
                    </p>
                </li>
                <li>
                    <MdOutlineVerified/>
                    <h2>Qualidade</h2>
                    <p>
                        Mais de 1,6 mil colaboradores diretos e 6,5 mil indiretos
                    </p>
                </li>
                <li>
                    <FiSmartphone/>
                    <h2>Tecnologia</h2>
                    <p>
                        Big Data, Machine Learning, Robótica, Geolocalização, RFID e IOT são algumas das 
                        ferramentas que usamos no dia a dia para gerenciamento do estoque e entregas.
                    </p>
                </li>
                <li>
                    <TbMapSearch/>
                    <h2>Abrangência</h2>
                    <p>
                        Rede exclusiva com 375 franquias altamente treinadas que garantem um atendimento de 
                        qualidade em mais de 1033 cidades do Brasil.
                    </p>
                </li>
            </Content>
        </Container>
    )
}

export default Topics