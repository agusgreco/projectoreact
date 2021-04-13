import Tarjeta from './Tarjeta';
import {Component} from 'react';

const arrayTarjetas = [
    {
        nombreyapellido:"Agus",
        email:"@mail",
        nacimientoyedad: "1/3/02"
    },
    {
        nombreyapellido:"Emma", 
        email:"@mail", 
        nacimientoyedad:"1/4/02"   
    },
    {
        nombreyapellido:"Kane",
        email:"@mail", 
        nacimientoyedad:"1/3/02"
    }
]

class Tira extends Component{

    constructor(){
        super();
        this.state ={
            datos: arrayTarjetas,
        }
     }  


     borrarItem(idTarjeta){
        let resultado = this.state.datos.filter( (dato) => {
          return dato.id !== idTarjeta
        });
        this.setState({datos: resultado});
        console.log(this.state.datos)
     }

     render(){
      return (
        <div className="rowbody">
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
