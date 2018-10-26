import React, {Component} from 'react';
import fire from '../config/firebase';

class Logout extends Component {

    logout = () => {
        fire.auth().signOut();
    }
        render() {
            return (
                <div className="App container">
                    <button onClick={ this.logout } > Cerrar Sesión 
                    </button>
                </div>);

    }

}

export default Logout;