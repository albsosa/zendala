import React, { Component } from 'react';
import Swal from 'sweetalert2'
const axios = require('axios');
class Formulario extends Component {
    nameRef = React.createRef();
    last_nameRef = React.createRef();
    emailRef = React.createRef();
    cityRef = React.createRef();
    telRef = React.createRef();
    stateRef = React.createRef();
    addressRef = React.createRef();
    postal_codeRef = React.createRef();

    crearCliente = (e) => {

        e.preventDefault();
        //crear el objeto
            const nuevoCliente = {
                name : this.nameRef.current.value,
                last_name : this.last_nameRef.current.value,
                email : this.emailRef.current.value,
                city : this.cityRef.current.value,
                tel : this.telRef.current.value,
                state : this.stateRef.current.value,
                address: this.addressRef.current.value,
                postal_code: this.postal_codeRef.current.value
            }           
        //enviarlo props     
            axios.post('https://apizendalanodejs.herokuapp.com/api/user', nuevoCliente)
            .then(function (response) {
                Swal.fire(
                    '¡Buen trabajo!',
                    'El cliente se ha creado correctamente!',
                    'success'
                  )
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Todos los campos son obligatorios!'
                  })
            });       
            e.currentTarget.reset();
    }
    render() {
        return(
        <div>
                <section className="mt-5 page-section" id="contact">
                <div className="container">
                    <h2 className=" page-section-heading text-center text-uppercase text-secondary mb-0">Registro</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg> <i className="fas fa-star"></i> </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <form  onSubmit={this.crearCliente}>
                    <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Nombre</label>
                                        <input className="form-control" ref={this.nameRef} id="name" type="text" placeholder="Nombre"  aria-invalid="false" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Apellido</label>
                                        <input className="form-control" ref={this.last_nameRef}  id="last_name" type="text" placeholder="Apellido" aria-invalid="false" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email</label>
                                        <input className="form-control" ref={this.emailRef}  id="email" type="email" placeholder="Email "  aria-invalid="false" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Teléfono</label>
                                        <input className="form-control"  ref={this.telRef} id="tel" type="tel" placeholder="Teléfono" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Estado</label>
                                        <input className="form-control"  ref={this.stateRef}  id="estado" type="text" placeholder="Estado"  />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Ciudad</label>
                                        <input className="form-control" id="ciudad"  ref={this.cityRef}  type="text" placeholder="Ciudad" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Calle</label>
                                        <input className="form-control" id="calle"  ref={this.addressRef}  type="text" placeholder="Calle"  />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Calle</label>
                                        <input className="form-control" id="post_code"   ref={this.postal_codeRef} type="text" placeholder="Código postal" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="form-group mt-5" >
                                    <button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Crear registro</button>
                                </div>
                           
                        </div>
                    </div>

                    </form>
                </div>
            </section>
        </div>
        )
    }
}
 
export default Formulario;