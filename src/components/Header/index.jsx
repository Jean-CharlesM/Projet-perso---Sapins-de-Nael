import './styles.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='main'>
        <h1 className='title_header'><NavLink to='/'><span className='exem'>Les Sapins de Naël</span></NavLink></h1>
        <ul className="navbar">
          <NavLink to="/"> <span className='exem'>Accueil</span></NavLink>
          <NavLink to='/apropos'><span className='exem'>Qui sommes-nous ?</span></NavLink>
          <NavLink to='/nossapins'><span className='exem'>Shop ton sapin !</span></NavLink>
          <NavLink><span className='exem'>Contact</span></NavLink>
        </ul>
    </div>
  )
}

export default Header