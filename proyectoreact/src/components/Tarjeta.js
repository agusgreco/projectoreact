function Tarjeta(props) {
    return (
        <div className="tarjeta">

                    <div className="tarjeta-text">
                        <div className="image"> 
                          <img  src={props.tarjetaAMostrar.image}/> 
                        </div>
                        <div className="nombreyapellido words"> {props.tarjetaAMostrar.nombreyapellido} </div>
                        <div className="email words"> {props.tarjetaAMostrar.email}</div>
                        <div className="nacimientoyedad words">{props.tarjetaAMostrar.nacimientoyedad} </div>

                    </div>

        </div>
    )
}

export default Tarjeta;