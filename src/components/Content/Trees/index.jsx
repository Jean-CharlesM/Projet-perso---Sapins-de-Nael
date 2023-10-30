import './styles.scss' ;
import { NavLink } from 'react-router-dom';

const Trees = () => {
  return (
    <div>
      <h1 className='our_trees'>Nos sapins</h1>
      <p className='intro'>Cette année, nous vous propons deux types de sapins : l'épicéa & et le nordmann.</p>
      <div className='trees_choose'>
        <div>
          <img className='epicea' src="../../../public/pictures/epicea1.png" alt="Photo épicéa" />
          <p className='tit1'>Tailles et tarifs :</p>
          <h3>Epicea</h3>
          <ul>
            <li>80/100cm : 8€</li>
            <li>100/150cm : 15€</li>
            <li>150/200cm : 17€</li>
            <li>200/250cm : 20€</li>
          </ul>
          <button className='button_tree2'>Je réserve mon Epicea</button>
        </div>
        <div>
          <img className='nordmann' src="../../../public/pictures/nordmann2.png" alt="Photo nordmann" />
          <p className='tit2'>Tailles et tarifs :</p>
          <h3>Nordmann</h3>
          <ul className='list_prices'>
            <li>80/100cm : 18€</li>
            <li>100/125cm : 23€</li>
            <li>125/150cm : 29€</li>
            <li>150/175cm : 34€</li>
          </ul>
          <button className='button_tree2'>Je réserve mon Nordamnn</button>
        </div>
      </div>
      <p className='intro'>Vous ne savez pas lequel choisir ? Quel est la différence entre les deux ? Cliquez <NavLink to="/apropos"><span className='here'>ici</span></NavLink> pour plus d'informations.</p>

    </div>
  )
}

export default Trees;