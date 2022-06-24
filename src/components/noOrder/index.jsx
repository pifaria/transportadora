import { Container } from "./styles"

const NoOrder = () =>{
    return (
        <Container>
            <h1>Informações de rastreio</h1>
            <section>
                <span>Situação atual</span>
                <h2>Encomenda não encontrada</h2>
            </section>
            <p>
                Entre em contato com o seu remetente para confirmar se as informações estão corretas.
            </p>
            <p>
                Dentre os principais motivos para não localizarmos na base, o problema pode ser:
            </p>
            <ul>
                <li>- A sua encomenda poderá ser entregue por outra transportadora;</li>
                <li>- A encomenda ainda não foi liberada pelo remetente para que possamos seguir com os procedimentos de entrega;</li>
                <li>- O seu código de rastreio pode estar incorreto ou incompleto.</li>
            </ul>
            <img
                alt="Pedido não encontrado"
                src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-4064375-3363936.png"
            />

        </Container>
    )
}

export default NoOrder