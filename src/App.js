import "./App.css";
import Routes from "./Routes";
import Back from "./Img/Back.jpg";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Back} alt="" />
        <div className="routes">
          <Routes />
        </div>
      </header>
    </div>
  );
}

export default App;
