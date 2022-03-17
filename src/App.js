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
          <Dictionary  defaultKeyword="sunflower" />
        </main>
        <footer className="App-footer">
          <small>Coded by Devanie Dawson & 
            <a href="https://github.com/DDD91/dictionary-project-1" target="_blank" rel="noreferrer">
               {""} Open-sourced
               </a>
              </small>  
              
                    </footer>
      </div>
    </div>
  );
}

