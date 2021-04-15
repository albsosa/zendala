import React, { Component } from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListaClientes from '../components/ListaClientes';
 
class home extends Component {
    render() {
        return (
            <div>
                <Header />
                <ListaClientes />
                <Footer />
            </div>
)
    }
}
export default home;