import Tira from './components/Tira'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
     
     { /*componente tira */}
     <Header/>
     
     <Tira/>

     <footer id="footer">
      <br/>
      <div className="container position-static">
        <div className="row">
          <div className="col-md-4 bottom-text">
          </div>

          <div className="footerclass">
           <a target="_blank" rel="noopener noreferrer" className="text-white" href="https://www.instagram.com/agusgreco_/">AGUSTINA GRECO -  </a>
            <a target="_blank" rel="noopener noreferrer" className="text-whitee" href="https://www.instagram.com/emajrz/">EMA JUAREZ</a>
            
          </div>
        </div>
      </div>
     </footer>


    </div>
  );
}

export default App;
