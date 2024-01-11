import './App.css';
import FormUncontrolled from './FormUncontrolled';
import FormControlled from './FormControlled';
import PasswordProtector from './PasswordProtector';
import ArtistTitleVersionTable from './ArtistTitleVersionTable/ArtistTitleVersionTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PasswordProtector />
      </header>
    </div>
  );
}

export default App;
