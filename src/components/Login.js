import React from "react";
import "./Login.css";
import icono from "../icono.png";
const axios = require("axios");
const Login = ({ login }) => {
    const userRef = React.createRef();
    const passwordRef = React.createRef();
    const loginZendala = (e) => {
        e.preventDefault();
        //crear el objeto
        const valueslogin = {
            user: userRef.current.value,
            password: passwordRef.current.value,
        };
        axios
            .post("https://apizendalanodejs.herokuapp.com/api/login", valueslogin)
            .then(function (response) {
                console.log(response);
                login();
            })
            .catch(function (error) {
                console.log(error);
            });
        //resetear formulario
        e.currentTarget.reset();
    };
    return (
        <div>
            <section className="mt-5 page-section" id="contact">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={icono} id="icon" alt="User Icon" />
                        </div>
                        <form onSubmit={loginZendala}>
                            <input type="text" id="login" className="fadeIn second" ref={userRef} placeholder="user" />
                            <input type="text" id="password" className="fadeIn third" ref={passwordRef} placeholder="password" />
                            <input type="submit" className="fadeIn fourth" value="Log In" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Login;
