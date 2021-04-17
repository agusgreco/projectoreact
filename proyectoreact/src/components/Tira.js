import Tarjeta from './Tarjeta';
import {Component} from 'react';

// const arrayTarjetas = [
//     {
//         nombreyapellido:"Agus",
//         email:"@mail",
//         nacimientoyedad: "1/3/02"
//     },
//     {
//         nombreyapellido:"Emma", 
//         email:"@mail", 
//         nacimientoyedad:"1/4/02"   
//     },
//     {
//         nombreyapellido:"Kane",
//         email:"@mail", 
//         nacimientoyedad:"1/3/02"
//     }
// ]

class Tira extends Component{

    constructor(){
        super();
        this.state ={
            datos: [],
        }
     }  


     componentDidMount(){
        fetch("https://randomuser.me/api/?results=10")
        .then(result => result.json())
        .then(data => {
          this.setState({datos: data.results})
          console.log(data)
        })
      }
      
     borrarItem(idTarjeta){
        let resultado = this.state.datos.filter( (dato) => {
          return dato.id !== idTarjeta
        });
        this.setState({datos: resultado});
        console.log(this.state.datos)
     }

     agregarTarjetas(){
        console.log("se agregaron 10 tarjetas")
        fetch("https://randomuser.me/api/?results=10")
        .then(result => result.json())
        .then(data => {
          this.state.datos.push(data.results);
          this.setState({datos: this.state.datos})
        })
      }

      filtrarTarjetas(){

      }


     render(){
      return (
        <div className="rowbody">
            <div className="center">
           <button className="boton" onClick={this.agregarTarjetas.bind(this)} > Agregar Tarjetas </button>
          
                {/* <input type="search" placeholder="Search" aria-label="Search"> */}
                <button className="botonn" onClick={this.filtrarTarjetas.bind(this)}>Filtrar</button>
                </div>
           {this.state.datos.map((unaTarjeta, idx) =>(
                <div className="unaTarjeta" key={idx}>
                  <Tarjeta tarjetaAMostrar={unaTarjeta}  onBorrar={this.borrarItem.bind(this)}/>
                </div>
            )) }

        </div>
      )
    }
}

export default Tira;
