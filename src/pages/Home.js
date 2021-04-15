import React, { Component } from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';
 
class home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Formulario />
                <Footer />
            </div>
)
    }
}
export default home;