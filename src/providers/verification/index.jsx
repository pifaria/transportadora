import { createContext, useContext, useState } from "react";
import { useOrder } from "../order";
import { toast } from 'react-toastify'

const VerificationContext = createContext()

export const VerificationProvider = ({children}) => {
    const [verification, setVerification] = useState(false)
    const [modal, setModal] = useState(false)
    const { order } = useOrder()

    const handleVerification = (data) => {
        if(order.email === data.search || order.HAWB === data.search){
            toast.success("Verificação bem sucedida")
            return setVerification(true)
            
        }else{    
            toast.error("Os dados não correspondem")
            return setVerification(false)
        }
    } 


    return (
        <VerificationContext.Provider value={{setModal, handleVerification, verification, setVerification}}>
            {children}
        </VerificationContext.Provider>
    )
}

export const useVerification = () => useContext(VerificationContext)