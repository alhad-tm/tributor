import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Prekets from './components/Prekets/Prekets';
import Tcinema from './components/Tcinema/Tcinema';
import Tmedia from './components/Tmedia/Tmedia';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/tmedia'  element={ <Tmedia/>}/>
          <Route path='/tcinema' element={ <Tcinema/>}/>
          <Route path='/prekets'  element={   <Prekets/>}/>
        </Routes>
      </Router>
 
  
  

    </div>
  );
}

export default App;
