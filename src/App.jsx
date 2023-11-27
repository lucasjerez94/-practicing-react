import {Header} from './components/Header/Header';
import {SearchBar} from './components/searchbar/Searchbar';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Footer} from './components/Footer/Footer';
import '../src/App.css';

function App() {
  return (
    <div id='root' >
      <Header />
      <div className='ContentWrapper'>
        <Sidebar />
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
