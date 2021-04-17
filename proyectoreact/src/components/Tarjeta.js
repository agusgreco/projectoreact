import React, {Component} from 'react';

class Tarjeta extends Component {
    constructor(){
        super();
        this.state ={
        }
      }


    componentDidMount(){
        console.log("Se creo la tarjeta "+ this.props.id);
      }
    
      componentDidUpdate(prevProps, prevStates){
        console.log("Se actualizo la tarjeta "+ this.props.id);
        console.log(prevProps);
        console.log(prevStates)
    
      }
    
      componentWillUnmount(){
        console.log("Se borro la tarjeta "+ this.props.id);
      }

      verDetalle(){
          
      }
   
   render(){
    return (
        <div className="tarjeta">

                    <div className="tarjeta-text">
                        <div className="image"> 
                          <img alt="foto" src={this.props.tarjetaAMostrar.picture.medium}/> 
                        </div>
                        <div className="nombreyapellido words"> {this.props.tarjetaAMostrar.name.first} {this.props.tarjetaAMostrar.name.last} </div>
                        <div className="email words"> {this.props.tarjetaAMostrar.email}</div>
                        <div className="nacimientoyedad words">{this.props.tarjetaAMostrar.dob.date} - {this.props.tarjetaAMostrar.dob.age} ys </div>
                        {/* <button type="button"onClick={this.props.verDetalle.bind(this, this.props.tarjetaAMostrar.id)}>Ver detalle</button> */}
                        {/* <button type="button" onClick={this.props.onBorrar.bind(this, this.props.tarjetaAMostrar.id)}>Borrar</button> */}
                    </div>

        </div>
    )}
}

export default Tarjeta;