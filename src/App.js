import './App.css';
import AppState from './AppState';
import ControlledTweetInput from './ControlledTweetInput';
import AppPassword from './AppPassword';
import ArtistTitleVersionTable from './ArtistTitleVersionTable/ArtistTitleVersionTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ArtistTitleVersionTable /> 
      </header>
    </div>
  );
}

export default App;
