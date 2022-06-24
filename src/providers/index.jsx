import { MenuProvider } from "./menu"
import { OrderProvider } from "./order"
import { VerificationProvider } from "./verification"

const Providers = ({children}) => {
    return (
        <OrderProvider>
            <MenuProvider>
                <VerificationProvider>
                    {children}
                </VerificationProvider>
            </MenuProvider>
        </OrderProvider>
    )
}

export default Providers