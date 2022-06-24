import { createContext, useContext, useState } from "react";

const MenuContext = createContext()

export const MenuProvider = ({children}) => {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <MenuContext.Provider value={{openModal, closeModal, modal}}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenu = () => useContext(MenuContext)