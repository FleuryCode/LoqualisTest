import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import LoqualisLogo from './assets/loqualisLogo.png';
import NavExpandIcon from './assets/navOpenIcon.svg';
import MesInformations from './components/mesInformations/mesInformations.component';
import MonCorrespondant from './components/monCorrespondant/monCorrespondant.component';
import Navigation from './components/navigation/navigation.component';

const App = () => {

  // Navigation Button Click
  const navigationButtonClickHandle = () => {
    const nav = document.getElementById('mainNav');
    const info = document.getElementById('mainInfo');
    const navOpenButton = document.getElementById('navOpenButton');
    nav.classList.toggle('expandedNav');
    info.classList.toggle('reducedInfo');
    navOpenButton.classList.toggle('navIsOpen');
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
      <div className="row mainContainer">
        <div id="mainNav">
          <Navigation />
        </div>
        <div id="mainInfo">
          <div onClick={navigationButtonClickHandle} className="navOpenImage d-none d-md-block">
            <img id='navOpenButton' src={NavExpandIcon} alt="" />
          </div>
          <div className="container-fluid">
            <div className="row mt-4">
              <div className="col-12 col-md-8 d-flex justify-content-center mb-4">
                <MesInformations />
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <MonCorrespondant />
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
}

export default App;
