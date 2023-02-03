import React from 'react'
import './css/App.css';
import Home from './components/home';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Mainpage from './components/mainpage';
import Tech from './components/tech';
import Nontech from './components/nontech';
import Gallery from './components/gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/home" element={<Mainpage/>}/>
        <Route path='/tech' element={<Tech/>}/>
        <Route path='/nontech' element={<Nontech/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
