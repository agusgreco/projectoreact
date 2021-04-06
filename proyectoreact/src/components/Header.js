function Header(params) {
    return (
        <header >
            <nav id="header" className="ache1 sticky">
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

                    {/* <form   class="form-inline my-2 my-lg-0 d-flex justify-content-center" method="get"  action="./resultadoBusqueda.ejs"  >
                      <input class="form-control mr-sm-2" name="buscador" type="search" placeholder="Search" aria-label="Search">
                      <button  class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}


                </ul>


                </div>

            </nav>

        </header>
    )
}

export default Header;