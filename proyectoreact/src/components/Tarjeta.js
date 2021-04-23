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
          console.log("viendo detalle");
      }

      verDetalle(visibility){
            this.setState({
             visibilityNuevo: visibility,
            });
           console.log("con visibility");
        }
      

   render(){
     let midiv =""
     console.log(this.state.visibilityNuevo)
      if(this.state.visibilityNuevo =="true"){
          midiv = <div><div className="words">Fecha de registro: {this.props.tarjetaAMostrar.registered.date}</div><div className="telefonos words">Telefono: {this.props.tarjetaAMostrar.phone} - {this.props.tarjetaAMostrar.cell}</div>        <div className="location words">{this.props.tarjetaAMostrar.location.street.number} {this.props.tarjetaAMostrar.location.street.name} {this.props.tarjetaAMostrar.location.city} {this.props.tarjetaAMostrar.location.state} {this.props.tarjetaAMostrar.location.postcode}</div></div>
      }else{
          midiv = <div></div>
      }

    return (
      <div  className="tarjeta-text" style={{width: this.state.tamanoNuevo}} onMouseEnter={ () => this.verMas("50%")} onMouseLeave={ () => this.verMas(this.state.tamanoOriginal)}>

                      <div className="x">
                        <button type="button" className="borrar" onClick={this.props.onBorrar.bind(this, this.props.tarjetaAMostrar.id)}>  x </button>
                        </div>

                            
                         
                        <div className="image"> 
                          <img alt="foto" src={this.props.tarjetaAMostrar.picture.large}/> 
                        </div>
                        <div className="nombreyapellido words"> {this.props.tarjetaAMostrar.name.first} {this.props.tarjetaAMostrar.name.last} </div>
                        <div className="email words"> email: {this.props.tarjetaAMostrar.email}</div>
                        <div className="nacimientoyedad words">{this.props.tarjetaAMostrar.dob.date} - {this.props.tarjetaAMostrar.dob.age} ys </div>
              

                  {midiv}
                   <button type="button" style={{display: this.state.visibilityNuevo}} onClick={ () => this.verDetalle("true")}>Ver detalle</button>

                  {/* <div  style={{display: this.state.visibilityNuevo}} 
                  //  onClick={ () => this.verDetalle("block")}
                  //  onMouseLeave={ () => this.verDetalle(this.state.visibilityOriginal)}
                   >
                        <div className="location words">{this.props.tarjetaAMostrar.location.street} {this.props.tarjetaAMostrar.location.city} {this.props.tarjetaAMostrar.location.state} {this.props.tarjetaAMostrar.location.postcode}</div>
                        <div className="fecharegistro words">Fecha de registro: {this.props.tarjetaAMostrar.registered.date}</div>
                        <div className="telefonos words">Telefono: {this.props.tarjetaAMostrar.phone} - {this.props.tarjetaAMostrar.cell}</div>
                  </div> */}


                   {/* <div  style={{display: this.state.visibilityNuevo}} 
                  //  onClick={ () => this.verDetalle("block")}
                  //  onMouseLeave={ () => this.verDetalle(this.state.visibilityOriginal)}
                   >
                        <div className="location words">{this.props.tarjetaAMostrar.location.street} {this.props.tarjetaAMostrar.location.city} {this.props.tarjetaAMostrar.location.state} {this.props.tarjetaAMostrar.location.postcode}</div>
                        <div className="fecharegistro words">Fecha de registro: {this.props.tarjetaAMostrar.registered.date}</div>
                        <div className="telefonos words">Telefono: {this.props.tarjetaAMostrar.phone} - {this.props.tarjetaAMostrar.cell}</div>
                  </div> */}
                        

        </div>
    )}
}

export default Tarjeta;



// agregarTarjetas(){
//   console.log("se agregaron 6 tarjetas")
//   fetch("https://randomuser.me/api/?results=6")
//   .then(result => result.json())
//   .then(data => {
//     this.setState({datos: data.results})
//     {this.state.datos.map((unaTarjeta, idx) =>(
//       <div className="unaTarjeta" key={idx}>
//         <Tarjeta tarjetaAMostrar={unaTarjeta}/>
//       </div>
//      ))}
//     // this.state.datos.push(data.result);
//     // this.setState({datos: this.state.datos})
//   })
// }
