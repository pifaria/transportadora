import { useForm } from "react-hook-form"
import Button from "../button"
import { Container, Content } from "./styles"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { orders } from '../../database/index'
import { useOrder } from "../../providers/order"
import { useHistory } from "react-router-dom"

const Form = () => {
    const schema = yup.object().shape({
        search: yup
        .string()
        .required("Campo obrigatório!"),
    })

    const { newSearch, setOrderList, orderList } = useOrder()

    const history = useHistory()

    const {register, handleSubmit } = useForm({resolver: yupResolver(schema)})

    const handleSearch = (data) =>{
        const filter = orders.filter((order) => (
            data.search.toString() === order.HAWB ||
            data.search.toString() === order.code
        ))

       if(filter.length > 0){
           setOrderList(...orderList, filter)
           newSearch({}) 
           return history.push("/pedidos")
        }else{
            setOrderList([])
            newSearch({})
            return history.push("/pedidos")
        }
    }

    return (
        <Container>
            <Content onSubmit={handleSubmit(handleSearch)}>
                <input
                    placeholder="HAWB ou Código de rastreio"
                    {...register("search")}
                />
                <Button type="submit">Rastrear</Button>
            </Content>
        </Container>
    )
}

export default Form