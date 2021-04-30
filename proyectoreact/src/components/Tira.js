import Tarjeta from './Tarjeta';
import {Component} from 'react';

class Tira extends Component{

    constructor(){
        super();
        this.state ={
          datos: [],
          value: "",
          tamanoOriginal: "32%",
          tamanoNuevo: "32%",
          //genero: [],
        }
     }  
     componentDidMount(){
        fetch("https://randomuser.me/api/?results=9")
        .then(result => result.json())
        .then(data => {
          this.setState({datos: data.results})
          console.log(data)
          console.log(data.results[0].location.postcode)
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
        console.log("se agregaron 6 tarjetas")
        fetch("https://randomuser.me/api/?results=6")
        .then(result => result.json())
        .then(data => {
          {data.results.map((unaTarjeta) =>{
            this.state.datos.push(unaTarjeta)
        })}
        this.setState({datos:this.state.datos});
        })
      }

      filtrarPorNombre(evento){
        if (evento.target.value.length !== 0) {
          var escrito = evento.target.value
          let datos = this.state.datos
          let filtrado = datos.filter((dato) => {
            let itemData = dato.name.first.toUpperCase()
            let textData = escrito.toUpperCase()
            return itemData.indexOf(textData) >= 0
          })
          this.setState({ datos: filtrado})
         // this.setState({ datos: filtrado, loEscrito: escrito})
        } else {
          fetch("https://randomuser.me/api/?results=12")
          .then(result => result.json())
          .then(data => {
            this.setState({datos: data.results})
            console.log(data)
          })
        }
      }

      filtrarPorApellido(evento){
        if (evento.target.value.length !== 0) {
          var escrito = evento.target.value
          let datos = this.state.datos
          let filtrado = datos.filter((dato) => {
            let itemData = dato.name.last.toUpperCase()
            let textData = escrito.toUpperCase()
            return itemData.indexOf(textData) >= 0
          })
          this.setState({ datos: filtrado})
        } else {
          fetch("https://randomuser.me/api/?results=12")
          .then(result => result.json())
          .then(data => {
            this.setState({datos: data.results})
            console.log(data)
          })

        }
      }

      filtrarPorEmail(evento){
        if (evento.target.value.length !== 0) {
          var escrito = evento.target.value
          let datos = this.state.datos
          let filtrado = datos.filter((dato) => {
            let itemData = dato.email.toUpperCase()
            let textData = escrito.toUpperCase()
            return itemData.indexOf(textData) >= 0
          })
          this.setState({ datos: filtrado})
        } else {
          fetch("https://randomuser.me/api/?results=12")
          .then(result => result.json())
          .then(data => {
            this.setState({datos: data.results})
            console.log(data)
          })

        }
      }

      filtrarPorEdad(evento){
        if (evento.target.value.length !== 0) {
          var escrito = evento.target.value
          let datos = this.state.datos
          let filtrado = datos.filter((dato) => {
      
            let itemData = dato.dob.age
            // let textData = escrito
            let textData = parseInt(escrito)
            console.log(textData + " " + itemData)
            return itemData === textData
          })
          this.setState({ datos: filtrado })
          console.log(filtrado)
        } else {
          fetch("https://randomuser.me/api/?results=12")
          .then(result => result.json())
          .then(data => {
            this.setState({datos: data.results})
            console.log(data)
          })
        }
      }

      // filtrarPorGeneroM(generom){
      //   this.setState({
      //     genero: generom,
      //    })
      //   if(this.state.genero ==="female"){
      //     let resultado = this.state.datos.filter( (dato) => {
      //       return dato.gender === generom
      //     });
      //     this.setState({datos: resultado});
      //     console.log(this.state.datos)
      //   }
      //   else{
      //     let resultado = this.state.datos.filter( (dato) => {
      //       return dato.gender === "male"
      //     });
      //     this.setState({datos: resultado});
      //     console.log(this.state.datos)
      //   }
      //   }

     render(){
      return (
        <div className="rowbody">
            <div className="center">
                <button className="boton acomodar" style={{fontWeight: "bold"}} onClick={this.agregarTarjetas.bind(this)} > AGREGAR TARJETAS </button>
  
                <form className="acomodar enblanco">
                    Nombre: 
                    {/* {this.state.value}   */}
                    <input type="text" onChange={(escrito) => this.filtrarPorNombre(escrito)} value={this.state.escrito} className="input" id="header-search" placeholder="FILTRAR"  />
                    {/* <button className="botonn" type="submit" value="Submit">ENTER</button> */}
                </form>

                <form className="acomodar enblanco">
                  Apellido: 
                  <input type="text" onChange={(escrito) => this.filtrarPorApellido(escrito)} value={this.state.escrito} className="input" id="header-search" placeholder="FILTRAR" />
                </form>

                <form className="acomodar enblanco">
                  Email: 
                  <input type="text" onChange={(escrito) => this.filtrarPorEmail(escrito)} value={this.state.escrito} className="input" id="header-search" placeholder="FILTRAR" />
                </form>

                <form className="acomodar enblanco">
                  Edad:  
                  <input type="text" onChange={(escrito) => this.filtrarPorEdad(escrito)} value={this.state.escrito} className="input" id="header-search" placeholder="FILTRAR" />
                </form>

                {/* Genero:
                <select className="acomodar">
                  <option onClick={ () => this.filtrarPorGenero("female")}>FEMALE</option>
                  <option onClick={ () => this.filtrarPorGenero("male")}>MALE</option>

                </select> */}
                
              </div>

            <div className="acaEstanLasTarjetas">
                {this.state.datos.map((unaTarjeta, idx) =>(
                  <div className="unaTarjeta" key={idx}>
                    <Tarjeta tarjetaAMostrar={unaTarjeta} onBorrar={this.borrarItem.bind(this)}/>
                  </div>
                  )) }
              </div>
        </div>
      )
    }
}

export default Tira;
