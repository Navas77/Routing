
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Formget from './components/Formget';
import Formupdate from './components/Formupdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/get" element={<Formget />} />
          <Route path="/updateget/:id" element={<Formupdate />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
