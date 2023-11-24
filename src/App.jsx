import {Header} from './components/Header/Header';
import {SearchBar} from './components/searchbar/Searchbar';
import {Footer} from './components/Footer/Footer';
import '../src/App.css';


function App() {
  return (
    <div className='app' >
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
