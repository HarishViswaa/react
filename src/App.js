import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import TimeLine from './components/TimeLine';
import ContentBar from './components/ContentBar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar />
      <ContentBar/>
      <br/>
      <TimeLine/>
    </div>
  );
}

export default App;
