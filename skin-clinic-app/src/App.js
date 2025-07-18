import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Trademarks from './pages/Trademarks';
import Contact from './pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Botox from './pages/Botox';
import Fillers from './pages/Fillers';
import SkinYouth from './pages/SkinYouth';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatments/botox" element={<Botox />} />
        <Route path="/treatments/fillers" element={<Fillers />} />
        <Route path="/treatments/skinyouth" element={<SkinYouth />} />
        <Route path="/trademarks" element={<Trademarks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
