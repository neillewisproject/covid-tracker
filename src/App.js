import header from './components/Header/Header';
import ChooseCountry from './components/Body/ChooseCountry/ChooseCountry';
import DisplayResult from './components/Body/DisplayResult/DisplayResult';
import Footer from './components/Footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      {header}
      <ChooseCountry/>
      <DisplayResult/>
      <Footer/>
    </div>
  );
}

export default App;
