import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListaClientes from "../components/ListaClientes";
import Login from "../components/Login";

const Home = () => {
    const [state, setState] = useState({ isLoggedIn: false });
    const { isLoggedIn } = state;
    const login = () => {
        setState({ isLoggedIn: true });
    };
    let mostrarComponente;
    if (isLoggedIn) {
        mostrarComponente = <ListaClientes />;
    } else {
        mostrarComponente = <Login login={login} />;
    }
    return (
        <div>
            <Header />
            {mostrarComponente}
            <Footer />
        </div>
    );
};
export default Home;
