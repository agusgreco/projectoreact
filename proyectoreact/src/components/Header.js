function Header(params) {
    return (
        <header >
            <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">


                <ul className="navbar-nav ml-auto">

                    <div className="agregar">
                    <li className="nav-item active">
                        <button type="button" className="btn btn-primary log" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">AGREGAR </button>
                    </li>
                    </div>

                    <div className="filtrar">
                        <li className="nav-item active">
                        <button type="button" className="btn btn-primary log" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">FILTRAR </button>

                        </li>
                    </div>

                </ul>


                </div>

            </nav>

        </header>
    )
}

export default Header;