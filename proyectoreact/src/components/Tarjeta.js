function Tarjeta(props) {
    return (
        <div className="row">
            <div className="tarjeta-body">
                <div className="tarjeta-inside align-items-center">
                    <div className="tarjeta-text">
                        <div className="nombreyapellido font-weight-bold text-white"> {props.nombreyapellido} </div>
                        <div className="email"> {props.email}</div>
                        <div className="nacimientoyedad">{props.nacimientoyedad} </div>
                    </div>
                    <div className="tarjeta-image">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta;