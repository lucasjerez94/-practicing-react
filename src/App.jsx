import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Maincontent} from './components/MainContent/Maincontent';
import {Site1} from './components/MainContent/pages/Site1';
import {Site2} from './components/MainContent/pages/Site2';
import {Site3} from './components/MainContent/pages/Site3';
import {Footer} from './components/Footer/Footer';
import '../src/App.css';


function App() {
  return (
    <Router>
      <div id='root' >
        <Header />
        <Maincontent />
        <Routes>
          <Route path="/Site1" element={Site1} />
          <Route path="/Site2" element={Site2} />
          <Route path="/Site3" element={Site3} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
