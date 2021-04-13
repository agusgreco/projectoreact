import React, {Component} from 'react';

class Tarjeta extends Component {
    // constructor(){
    //     super();
    //     this.state ={
    //     }
    //   }
   
   render(){
    return (
        <div className="tarjeta">

                    <div className="tarjeta-text">
                        <div className="image"> 
                          <img  src={props.tarjetaAMostrar.image}/> 
                        </div>
                        <div className="nombreyapellido words"> {props.tarjetaAMostrar.nombreyapellido} </div>
                        <div className="email words"> {props.tarjetaAMostrar.email}</div>
                        <div className="nacimientoyedad words">{props.tarjetaAMostrar.nacimientoyedad} </div>
                        <button type="button" onClick={this.props.onBorrar.bind(this, this.props.tarjetaAMostrar.id)}>Borrar</button>
                    </div>

        </div>
    )}
}

export default Tarjeta;