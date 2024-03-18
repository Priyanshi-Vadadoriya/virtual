import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './views/Home/Home';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/demo' element={<Demo/>} /> */}
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
