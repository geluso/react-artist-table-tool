import './App.css';
import FormUncontrolled from './FormUncontrolled';
import FormControlled from './FormControlled';
import PasswordProtector from './PasswordProtector';
import ArtistTitleVersionTable from './ArtistTitleVersionTable/ArtistTitleVersionTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArtistTitleVersionTable />

        <h2>Uncontrolled Form</h2>
        <FormUncontrolled />

        <h2>Controlled Form</h2>
        <FormControlled />

        <h2>Passwords</h2>
        <PasswordProtector />
      </header>
    </div>
  );
}

export default App;
