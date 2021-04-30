import React, {Component} from 'react';

class Tarjeta extends Component {
    constructor(){
        super();
        this.state ={
          tamanoOriginal: "32%",
          tamanoNuevo: "32%",
          visibilityOriginal: "false",
          visibilityNuevo: "false",
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

      verMas(tamano){
          this.setState({
            tamanoNuevo: tamano,
          });
          console.log("viendo mas");
      }

      verDetalle(visibility){
            this.setState({
             visibilityNuevo: visibility,
            });
           console.log("viendo detalle");
        }
      

   render(){
     let midiv =""
     console.log(this.state.visibilityNuevo)
      if(this.state.visibilityNuevo ==="true"){
          midiv = <div><div className="words">FECHA DE REGISTRO: {this.props.tarjetaAMostrar.registered.date}</div>
          <div className="telefonos words">TELEFONO: {this.props.tarjetaAMostrar.phone} - {this.props.tarjetaAMostrar.cell}</div> 
           <div className="location words"> UBICACION: {this.props.tarjetaAMostrar.location.street.name} {this.props.tarjetaAMostrar.location.street.number}, {this.props.tarjetaAMostrar.location.city}, {this.props.tarjetaAMostrar.location.state}, {this.props.tarjetaAMostrar.location.postcode}</div></div>
      }else{
          midiv = <div></div>
      }

      

    return (
      <div  className="tarjeta-text" style={{width: this.state.tamanoNuevo}} 
      onClick={ () => this.verMas("50%")} onMouseLeave={ () => this.verMas(this.state.tamanoOriginal)}
      >
           <div className="x">
              <button type="button" className="borrar" onClick={this.props.onBorrar.bind(this, this.props.tarjetaAMostrar.id)}>  x </button>
            </div>    
                                   
                         
                        {/* <div className="image">  */}
                          <img alt="foto" src={this.props.tarjetaAMostrar.picture.large}/> 
                        {/* </div> */}
                        <div className="nombreyapellido words"> NOMBRE: {this.props.tarjetaAMostrar.name.first} {this.props.tarjetaAMostrar.name.last} </div>
                        <div className="email words"> MAIL: {this.props.tarjetaAMostrar.email}</div>
                        <div className="nacimientoyedad words">({this.props.tarjetaAMostrar.dob.date} - {this.props.tarjetaAMostrar.dob.age} ys)</div>
              
                  {midiv}
                   <button type="button" className="buttonDetalle" style={{display: this.state.visibilityNuevo}} onClick={ () => this.verDetalle("true")}>VER DETALLE</button>
                   <button type="button" className="buttonNoDetalle" style={{display: this.state.visibilityNuevo}} onClick={ () => this.verDetalle("false")}>NO VER DETALLE</button>


                        

        </div>
    )}
}

export default Tarjeta;




