import Tarjeta from './Tarjeta'

//siempre se llama igual al archivo
function Tira(params) {
    return (
        <ul> 
       <Tarjeta/>
       {/* vamos a ver como pasarle informaicon a esta tarjeta */}
       <Tarjeta/>
       <Tarjeta/>

     </ul>
    );
}

export default Tira;
