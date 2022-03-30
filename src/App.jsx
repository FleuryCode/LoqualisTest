import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import LoqualisLogo from './assets/loqualisLogo.png';
import Navigation from './components/navigation/navigation.component';

const App = () => {
  const testClick = () => {
    const nav = document.getElementById('mainNav');
    const info = document.getElementById('mainInfo');

    nav.classList.toggle('expandedNav');
    info.classList.toggle('reducedInfo');


  }
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <div className="topBar">
            <img src={LoqualisLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="row mainInfoContainer">
        <div id="mainNav">
          <Navigation />
        </div>
        <div id="mainInfo">
          <button onClick={testClick}>Test</button>
        </div>
      </div>



    </div>
  );
}

export default App;
