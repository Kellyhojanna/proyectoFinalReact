import { Route, Routes } from "react-router-dom";
import routes from "../routes/routes";
import Header, { HeaderDerecho, HeaderIzquierdo } from "./Header";

const Contenido = ({ children }) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}

const Content = () => {
    return (
        <>
            <Contenido >
                <Header>
                    <HeaderIzquierdo>
                       <img src="../src/images/balls-8049598_1280.jpg" width="75" alt="50" />
                    </HeaderIzquierdo>
                    <HeaderDerecho>
                        Reserva de Canchas
                    </HeaderDerecho>
                </Header>
                <main className="content">
                    <Routes>
                        {
                            routes.map((route) => (
                                <Route key={route.path} path={route.path} element={route.element}></Route>
                            ))
                        }
                    </Routes>
                </main>
            </Contenido>
        </>
    );
}

export default Content;