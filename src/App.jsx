import {Header} from './components/Header/Header';
import {Maincontent} from './components/MainContent/Maincontent';
import {Footer} from './components/Footer/Footer';
import '../src/App.css';

function App() {
  return (
    <div id='root' >
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
};

export default App;
