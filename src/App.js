import './App.css';
import Navbar from '../src/components/Navbar.jsx';
import CountriesList from '../src/components/CountriesList.jsx';
import CountryDetails from '../src/components/CountryDetails.jsx';

function App() {
  return (
    <div className="App">
      <h1> Welcome to WikiCountries</h1>
      <Navbar />
      <CountriesList />
      <CountryDetails />
    </div>
  );
}

export default App;
