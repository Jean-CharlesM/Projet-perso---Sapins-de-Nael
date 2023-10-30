import './styles.scss'
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div className="footer">
        <NavLink to='cgv'>Mentions légales & CGV</NavLink>
        <NavLink to='apropos'>Qui sommes-nous ?</NavLink>
        <NavLink to='#'>FAQ</NavLink>
      </div>
      <div className='social'>
        <a href=''><img src="../../../public/pictures/logo-facebook.png" alt="" /></a>
        <a href=''><img src="../../../public/pictures/logo-insta.png" alt="" /></a>
        <a href=''><img src="../../../public/pictures/logo-twitter.png" alt="" /></a>
      </div>
    </>
  )
}

export default Footer ;