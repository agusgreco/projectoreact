import React, {Component} from 'react';

class Tarjeta extends Component {
    constructor(){
        super();
        this.state ={
          tamanoOriginal: "32%"
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

      // verDetalle(tamano){
      //   if(this.state.tamanoOriginal !== "48%"){
      //     this.setState({
      //       tamanoOriginal: tamano,
      //     });
      //     console.log("viendo detalle");
      //   }
      // }
   
   render(){
    return (
        <div className="tarjeta">

                    <div className="tarjeta-text">

                       {/* <div className="tarjeta-text" style={{ width: this.state.tamano}}
                          onMouseEnter={ () => this.verDetalle("48%")}
                          onMouseLeave={ () => this.verDetalle(this.state.tamanoOriginal)}> */}

                        <div className="image"> 
                          <img alt="foto" src={this.props.tarjetaAMostrar.picture.large}/> 
                        </div>
                        <div className="nombreyapellido words"> {this.props.tarjetaAMostrar.name.first} {this.props.tarjetaAMostrar.name.last} </div>
                        <div className="email words"> {this.props.tarjetaAMostrar.email}</div>
                        <div className="nacimientoyedad words">{this.props.tarjetaAMostrar.dob.date} - {this.props.tarjetaAMostrar.dob.age} ys </div>
                        
                        {/* <div className="location words">{this.props.tarjetaAMostrar.location.street} {this.props.tarjetaAMostrar.location.city} {this.props.tarjetaAMostrar.location.state} {this.props.tarjetaAMostrar.location.postcode}</div> */}
                        {/* <div className="fecharegistro words">Fecha de registro: {this.props.tarjetaAMostrar.registered.date}</div> */}
                        {/* <div className="telefonos words">Telefono: {this.props.tarjetaAMostrar.phone} - {this.props.tarjetaAMostrar.cell}</div> */}


                        {/* <button type="button" onClick={this.props.verDetalle.bind(this, this.props.tarjetaAMostrar.id)}>Ver detalle</button> */}
                        <button type="button" className="borrar" onClick={this.props.onBorrar.bind(this, this.props.tarjetaAMostrar.id)}>Borrar</button>
                    </div>

        </div>
    )}
}

export default Tarjeta;