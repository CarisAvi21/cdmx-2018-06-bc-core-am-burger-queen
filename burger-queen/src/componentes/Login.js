import React, { Component } from "react";
import fire from "../config/firebase";
import Logo from '../componentes/assets/Happy-burger.png';

class Login extends Component {
    constructor(props) {
        super(props);
        // this.login = this.login.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login =(e)=> {
        e.preventDefault();
        console.log(e.target);
        
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => { })
        .catch((error) => {
            console.log(error);
        });
    }

     handleAuth = () => {

       const provider = new fire.auth.GoogleAuthProvider();

       fire.auth().signInWithPopup(provider)
         .then(result => console.log(`${result.user.email}Ha iniciado sesión`))
         .catch(error => console.log(`Error ${error.code}: ${error.message}`));
     }

    //  recoverPassword = () =>{
    //      const auth = fire.auth();
    //      const emailAdress = email.val();
    //      auth.sendPasswordResetEmail(emailAdress)
    //         .then(function(){
    //             alert('Se ha enviado un correo a su cuenta. Por favor revise su correo')
    //         }, function(error) {
    //             console.log(error);    
    //         })
    //     }
     
    
    render() {
        return (
            <div className = "col-md-6" >
                <form onSubmit={this.login}>
                    <div class = "form-group">

                    <img src={Logo} className='logo' alt='logo burger' />
                        
                        <label for = "exampleInputEmail1" > Correo 
                        </label> 
                            <input value = { this.state.email } onChange = { this.handleChange } type = "email" name = "email" className = "form-control" id = "exampleInputEmail1" aria-describedby = "emailHelp"  placeholder = "correo"/>
                                <small id = "emailHelp" class = "form-text text-muted">
                                </small> 
                    </div>
                        <div class = "form-group">
                            <label for = "exampleInputPassword1" > Contraseña 
                            </label>
                                 <input value = { this.state.password } onChange ={ this.handleChange } type = "password" name = "password" class = "form-control" id = "exampleInputPassword1" placeholder = "contraseña"/>
                        </div>
                            < button bsStyle = "primary" type = "submit" className="btn btn-primary" > Iniciar Sesion
                            </button>
                        <div class = "form-group">
                            <a href= "#" tabIndex="5" class="forgot-password" onClick="recoverPass()">¿Olvidaste tu contraseña?</a>
                        </div>
                </form>

            </div>
        );
    }
}

    export default Login;