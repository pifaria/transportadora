import { Route, Switch } from "react-router-dom"
import Actions from "../pages/actions"
import Home from "../pages/home"
import MyOrder from "../pages/myOrder"
import OrdersPage from "../pages/orders"
import Profile from "../pages/profile"

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route> 

            <Route exact path="/pedidos">
                <OrdersPage/>
            </Route>

            <Route path="/pedidos/:code">
                <MyOrder/>
            </Route>

            <Route path="/perfil">
                <Profile/>
            </Route>
            
            <Route path="/acoes-sociais">
                <Actions/>
            </Route>

            <Route path="/franquias">
            </Route>

            <Route path="/blog">
            </Route>

            <Route path="/trabalhe-conosco">
            </Route>

            <Route path="/blog">
            </Route>

            <Route path="/contato">
            </Route>

            <Route path="/canal">
            </Route>

            <Route path="/area-cliente">
            </Route>
        </Switch>
    )
}

export default Routes