import dictionary from "./dictionary.jpg";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <img src={dictionary} className="App-logo img-fluid"
        alt="logo" />  
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Devanie Dawson</small>        </footer>
      </div>
    </div>
  );
}

