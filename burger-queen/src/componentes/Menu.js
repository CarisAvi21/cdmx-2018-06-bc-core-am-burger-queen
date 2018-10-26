import React,{Component} from 'react';

class Menu extends Component {

    render() {
        return (
            <form onClick={this.orden}>
                <h2>Menu</h2>

                <div className="campo">
                     <label>Desayuno</label>
                     < input className = "button-primary u-full-width"
                       type = "submit" value="Cafe Americano $5" / >
                </div>

                <div className="campo">
                     < input className = "button-primary u-full-width"
                       type = "submit" value = "Cafe con leche $7" / >
                </div>

                <div className="campo">
                    < input className = "button-primary u-full-width"
                      type = "submit" value = "Sandwich de jamon con queso $10" / >
                </div>

                <div className="campo">
                     < input className = "button-primary u-full-width"
                       type = "submit" value = "Jugo natural $7" / >
                </div>
            </form>
          
        );
    }
}

export default Menu;
