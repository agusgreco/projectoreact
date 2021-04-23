import Tarjeta from './Tarjeta';
import {Component} from 'react';

class Tira extends Component{

    constructor(){
        super();
        this.state ={
          datos: [],
          value: "",
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
        console.log("se agregaron 6 tarjetas")
        fetch("https://randomuser.me/api/?results=6")
        .then(result => result.json())
        .then(data => {
          this.state.datos.push(data.result);
          // this.setState({datos: data.results, nextpage: data.info.next})
          //un map aca
          this.setState({datos: this.state.datos})
        })
      }

      
      // filtrarPorNombre(evento){
      //   this.setState({value: evento.target.value})
      // }

      // filtrarPorApellido(evento){
      //   this.setState({value: evento.target.value})
      // }

      // filtrarPorEdad(evento){
      //   this.setState({value: evento.target.value})
      // }

          // filtrarTarjetas(lobuscado){
      //   let resultado = this.state.datos.filter( (persona) => {
      //     return persona.name.first || persona.name.last || persona.dob.age === lobuscado
      //   });
      //   this.setState({value: resultado});
      //   console.log(this.state.datos)
      // }




      // filtrarPorNombre(evento){
      //    if (evento.target.value.length !== 0) {
      //     var escrito = evento.target.value
      //     fetch("https://randomuser.me/api/")
      //     .then(result => result.json())
      //     // let datos = this.state.datos
      //     .then(data => {
      //       this.setState({datos: data.results})
      //       let filtrado = data.filter((dato) => {
      //       let itemData = dato.name.first.toUpperCase()
      //       let textData = escrito.toUpperCase()
      //       return itemData.indexOf(textData) >= 0
      //       })
      //       // this.setState({datos: filtrado})
      //       this.setState({data: filtrado})
      //     })          
      //   } else {
      //     fetch("https://randomuser.me/api/?results=12")
      //     .then(result => result.json())
      //     .then(data => {
      //       this.setState({datos: data.results})
      //       console.log(data)
      //     })
      //   }
      // }

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

      filtrarPorEdad(evento){
        if (evento.target.value.length !== 0) {
          var escrito = evento.target.value
          let datos = this.state.datos
          let filtrado = datos.filter((dato) => {
            let itemData = dato.dob.age
            let textData = escrito
            // let textData = parseInt(escrito)
            return itemData === textData
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
                

                {/* <form action="/" method="get" onSubmit={this.filtrarTarjetas.bind(this)}> */}
                <form >
                    Nombre: {this.state.value}  
                    <input type="text" value={this.state.escrito} className="input" id="header-search" placeholder="Filtrar" onChange={(escrito) => this.filtrarPorNombre(escrito)} />
                    {/* <button className="botonn" type="submit" value="Submit">ENTER</button> */}
                             {/* onClick={this.filtrarTarjetas.bind(this)} */}
                </form>

                <form>
                  Apellido: {this.state.value}  
                  <input type="text" onChange={(escrito) => this.filtrarPorApellido(escrito)} value={this.state.escrito} className="input" id="header-search" placeholder="Filtrar" />
                  {/* <button className="botonn" type="submit" value="Submit">ENTER</button> */}
                </form>

                <form>
                  Edad: {this.state.value}  
                  <input type="text" onChange={(escrito) => this.filtrarPorEdad(escrito)} value={this.state.escrito} className="input" id="header-search" placeholder="Filtrar" />
                  {/* <button className="botonn" type="submit" value="Submit">ENTER</button> */}
                </form>
                {/* <form onSubmit={this.filtrarTarjetas.bind(this)}>
                  Edad: {this.state.value}  
                  <input type="text" value={this.state.value} className="input" id="header-search" placeholder="Filtrar" onChange={this.filtrarPorEdad.bind(this)}/>
                  <button className="botonn" type="submit" value="Submit">ENTER</button>
                </form> */}


                {/* <button type="button" className="vertice" onClick={this.cambiarVertice.bind(this)}> CAMBIAR VERTICE </button> */}

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
