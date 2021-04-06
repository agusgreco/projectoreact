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
        <div className="rowbody">
            { arrayTarjetas.map(function(unaTarjeta, idx){
                return (
                    <div className="unaTarjeta" key={idx}>
                        <Tarjeta tarjetaAMostrar={unaTarjeta}/>
                    </div>
            )}) }     

        </div>
    );
}

export default Tira;
