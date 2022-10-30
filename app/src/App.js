import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import wetek from './wetek.svg';
import './App.css';
import { Home } from './pages/Home'
import { Teilnehmer } from './pages/Teilnehmer'
import { Upload } from './pages/Upload'
import { useParams } from 'react-router-dom';

function App() {
  const { id } = useParams()

  return (
    <div className="App">
      <header className="App-header">
        <img src={wetek} className="App-wetek" alt="wetek" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teilnehmer" element={<Teilnehmer id={id} />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
