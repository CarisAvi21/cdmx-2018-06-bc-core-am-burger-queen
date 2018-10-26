import React, {Component} from 'react';
import fire from '../config/firebase';
import Header from './Header';
import Logout from './Logout';
import '../css/Home.css';
import Menu from './Menu';

class Home extends Component {

        render() {
            return (
                <div className="Home container">
                    <Header
                        titutlo='Bienvenido a Burger Queen'
                    />
                    <Logout />
                 <div className="contenido-principal contenido">
                    <div className="row">
                        <div className="one-half colum">
                          <Menu />

                        </div>
                        <div className="one-half colum">

                        </div>
                    </div>
                 </div>
                </div>
            
            );

        }

}

export default Home;