import Tira from './components/Tira'


function App() {
  return (
    <div className="App">
     
     { /*componente tira */}
     <Tira/>
     
     <Tira/>

     <Tira/>

     <footer id="footer">
      <br/>
      <div className="container position-static">
        <div className="row">
          <div className="col-md-4 ">
           {/* <a target="_blank" rel="noopener noreferrer" href="https://www.themoviedb.org/?language=es-ES"> <img id="logoFooter" src="https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png" alt=""> </a> */}
          </div>

          <div className="col-md-4">
            <ul className="list-inline nombres text-center">
             <li className="text-white"><a target="_blank" rel="noopener noreferrer" className="text-white" href="https://www.instagram.com/agusgreco_/">Agustina Greco</a></li>
             <li className="text-white"><a target="_blank" rel="noopener noreferrer" className="text-white" href="https://www.instagram.com/emajrz/">Emma Juarez</a></li>
            </ul>
          </div>
        </div>
      </div>
     </footer>


    </div>
  );
}

export default App;
