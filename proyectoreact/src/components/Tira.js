import Tarjeta from './Tarjeta';
import {Component} from 'react';

class Tira extends Component{

    constructor(){
        super();
        this.state ={
            datos: [],

        }
     }  


     componentDidMount(){
        fetch("https://randomuser.me/api/?results=12")
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
        console.log("se agregaron 12 tarjetas")
        fetch("https://randomuser.me/api/?results=12")
        .then(result => result.json())
        .then(data => {
          this.state.datos.push(data.results);
          this.setState({datos: this.state.datos})
        })
      }

      filtrarTarjetas(lobuscado){
        let resultado = this.state.datos.filter( (dato) => {
          return dato.id === lobuscado
        });
        this.setState({datos: resultado});
        console.log(this.state.datos)
      }

      cambiarVertice(hov){
        if(this.state.vistaOriginal !== ""){
          this.setState({
            vistaOriginal: hov,
          });
          console.log("de horizontal a vertical o al revez");
        }
      }


     render(){
      return (
        <div className="rowbody">
            <div className="center">
                <button className="boton" onClick={this.agregarTarjetas.bind(this)} > AGREGAR TARJETAS </button>
          
                {/* <input type="search" placeholder="Search" aria-label="Search"> */}
                {/* <button className="botonn" onClick={this.filtrarTarjetas.bind(this)}>Filtrar</button> */}
                <form action="/" method="get">
                     <input type="text" className="input" id="header-search" placeholder="Filtrar"/>
                     <button className="botonn" onClick={this.filtrarTarjetas.bind(this)} type="submit">ENTER</button>
                </form>
                <button type="button" className="vertice" onClick={this.cambiarVertice.bind(this)}> CAMBIAR VERTICE </button>

                </div>
              <div className="acaEstanLasTarjetas">

           {this.state.datos.map((unaTarjeta, idx) =>(
                <div className="unaTarjeta" key={idx}>
                  <Tarjeta tarjetaAMostrar={unaTarjeta}  onBorrar={this.borrarItem.bind(this)}/>
                </div>
            )) }
            </div>

        </div>
      )
    }
}

export default Tira;
