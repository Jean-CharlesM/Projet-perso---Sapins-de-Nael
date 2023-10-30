import { Routes, Route } from 'react-router-dom';

import Home from "./Home";
import Trees from "./Trees";
import About from './About';
import Conditions from './Conditions';
import Contact from './Contact';

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nossapins' element={<Trees/>}/>
        <Route path='/apropos' element={<About/>}/>
        <Route path='/cgv' element={<Conditions/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Content ;