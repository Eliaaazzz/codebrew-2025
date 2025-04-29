import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FindProfessional from './FindProfessional';
import OfferService     from './OfferService';
import './App.css';
import HomePage from './Components/HomePage';
import INeedHelp from './Components/INeedHelp';
import ICanHelp from './Components/ICanHelp';

function App() {
  return (
    <BrowserRouter>
      {/* <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        <Link to="/find">I Need Help</Link>
        <Link to="/offer">I Can Help</Link>
      </nav> */}
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ICanHelp"  element={<ICanHelp />} />
        <Route path="/INeedHelp"  element={<INeedHelp />} />
        <Route path="/find"  element={<FindProfessional />} />
        <Route path="/offer" element={<OfferService />} />
        {/* <Route
          path="*"
          element={
            <div style={{ padding: '1rem' }}>
              <h1>Welcome!</h1>
              <p>Select “I Need Help” or “I Can Help” above.</p>
            </div>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;