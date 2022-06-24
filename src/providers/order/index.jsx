import { createContext, useContext, useState } from "react";

const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    const [orderList, setOrderList] = useState([])
    const [order, setOrder] = useState({})
    
    const newSearch = (data) =>{
        setOrder(data)
    }

    return (
        <OrderContext.Provider value={{newSearch, order, setOrderList, orderList}}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrder = () => useContext(OrderContext)