import { Routes, Route } from 'react-router-dom';

import Home from "./Home";
import Trees from "./Trees";
import About from './About';

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nossapins' element={<Trees/>}/>
        <Route path='/apropos' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Content ;