import Tarjeta from './Tarjeta'

//siempre se llama igual al archivo
function Tira(params) {
    return (
        <ul> 
       <Tarjeta nombreyapellido="ema" email="" nacimientoyedad=""/>
       {/* vamos a ver como pasarle informaicon a esta tarjeta */}
       <Tarjeta nombreyapellido="agus" email="" nacimientoyedad=""/>
       <Tarjeta nombreyapellido="marcos" email="" nacimientoyedad=""/>

     </ul>
    );
}

export default Tira;
