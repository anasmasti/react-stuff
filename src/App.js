import "./App.css";
import Main from "./components/body/Main";
import Logo from "./components/header/Logo";
import Nav from "./components/header/Nav";

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
