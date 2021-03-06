import React, { useState, useEffect } from "react";
import moment from 'moment';
moment.locale('es');
const axios = require("axios");
const ListaClientes = () => {
    const [state, setState] = useState({ clientes: [] });
    const mostrarClientes = () => {
        axios.get("https://apizendalanodejs.herokuapp.com/api/users").then((res) => {
            setState({ clientes: res.data });
        });
    };
    useEffect(() => {
        mostrarClientes();        
    }, []);    
    return (
        <div>
            <section className="mt-5 page-section" id="contact">
                <div className="container">
                    <h2 className=" page-section-heading text-center text-uppercase text-secondary mb-0">Lista de clientes</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                <path
                                    fill="currentColor"
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                            </svg>{" "}
                            <i className="fas fa-star"></i>{" "}
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Tel??fono</th>
                                <th scope="col">Fecha de creaci??n</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.clientes.map((cliente) => (
                                <tr key={cliente.id}>
                                    <td>{cliente.name}</td>
                                    <td>{cliente.last_name}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.phone_number}</td>
                                    <td>{moment(cliente.creation_date).format('LLLL')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ListaClientes;
