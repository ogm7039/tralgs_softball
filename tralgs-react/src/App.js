import logo from './logo.svg';
import './App.css';
import './Tralgs.css';
import Schedule from './Schedule';
import Home from './Home';
import Roster from './Roster';
import Pictures from './Pictures';
import Tickets from './Tickets';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="Back">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/schedule" element={<Schedule />} />
            <Route exact path="/roster" element={<Roster />} />
            <Route exact path="/tickets" element={<Tickets />} />
            <Route exact path="/pictures" element={<Pictures />} />
        </Routes>
    </div>

  );
}

export default App;
