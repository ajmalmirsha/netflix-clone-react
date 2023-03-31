
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import {originals,action} from './Urls'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' isSmall url={action} />
    </div>
  );
}

export default App;
