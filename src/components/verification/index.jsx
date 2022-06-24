import { Container, Content } from "./styles"
import Button from "../button"
import Header from "../header"
import { useVerification } from "../../providers/verification"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const Verification = () => {
    const schema = yup.object().shape({
        search: yup
        .string()
        .required("Campo obrigatório!"),
    })

    const { handleVerification } = useVerification()

    const {register, handleSubmit } = useForm({resolver: yupResolver(schema)})

    return (
        <Container>
            <Content>
                <Header/>
                <form onSubmit={handleSubmit(handleVerification)}>
                    <h1>Confirmar E-mail ou HAWB</h1>
                    <input
                        placeholder="Digite seu e-mail ou HAWB aqui"
                        {...register("search")}
                        type="text"
                    />
                    <Button type="submit">Confirmar</Button>
                </form>
            </Content>
        </Container>
    )
}

export default Verification