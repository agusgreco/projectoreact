import Tarjeta from './Tarjeta'
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

//siempre se llama igual al archivo
function Tira(params) {
    return (
        <ul> 
       { arrayTarjetas.map(function(unaTarjeta, idx){
            return (
                <div key={idx}>
                    <Tarjeta tarjetaAMostrar={unaTarjeta}/>
                </div>
      )}) }     

     </ul>
    );
}

export default Tira;
