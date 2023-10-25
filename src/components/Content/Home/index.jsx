import './styles.scss'

import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <div className='parap'>
      <img className='pic_tree_des' src="../../../public/pictures/christmas.png" alt="Illustrations 4 sapins" />
      <p className='descr'>La décoration du sapin de Noël est un rituel qui vous tient très à coeur ? Sapin épuré, pailleté ou surchargé, une chose est sûre, nous en sommes fiers. Cette année, profitez de notre gamme de sapins en provenance du Morvan pour trouver celui qui illuminera votre salon.</p>
      <button className='button_tree'><NavLink to='nossapins'><span className='exem'>Je choisis mon sapin</span></NavLink></button>
    </div>
  )
}

export default Home ;