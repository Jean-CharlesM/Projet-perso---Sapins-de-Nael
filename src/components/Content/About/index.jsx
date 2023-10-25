import './styles.scss'

const About = () => {
  return (
    <>
      <div>
        <h1 className='title_about'>Qui sommes nous ?</h1>
        <p>Les Sapins de Naël c’est une entreprise familiale créee en XXXX par Monsieur .... Aujourd’hui, c’est son petit-fils, Quentin Aillot, qui a repris les rênes de l’entreprise. L’intégralité de nos sapins proviennent du Morvans, réputée pour être la région où poussent plus beaux sapins de notre pays.
        </p>
        <img className='team' src="../../../public/pictures/equipe.jpg" alt="Photo de l'équipe" />

        <p>Nous proposons deux types de sapins, l’épicéa et le nordmann, qui ont chacun leur caractéristiques. Afin de vous aiguiller dans votre choix de sapins, vous trouverez ci-dessous ce qui les différencient : </p>
      </div>
      
      <div className='tree_section'>
        <img className='epicea_pic' src="../../../public/pictures/epicea.png" alt="Photo épicéa" />
        <ul className='li_epicea'> Epicéa
          <li>Aspect : L'épicéa a des aiguilles pointues et raides qui sont généralement vert foncé sur le dessus et bleu-vert sur le dessous. Les aiguilles sont attachées individuellement aux branches. </li>
          <li>Durée de conservation : Les épicéas ont tendance à perdre leurs aiguilles plus rapidement par rapport aux nordmanns, ce qui signifie qu'ils ont une durée de conservation plus courte une fois coupés.</li>
          <li>Parfum :  Les épicéas ont souvent un parfum plus fort par rapport aux nordmanns, ce qui peut être agréable pour certaines personnes mais dérangeant pour d'autres.</li>
        </ul>
      </div>

      <div className='tree_section'>
        <ul className='li_nordmann'> Nordmann
          <li>Aspect : Les nordmanns ont des aiguilles plus douces et plates, vert foncé et brillantes des deux côtés. Ces aiguilles sont attachées de manière plus étroite aux branches, ce qui donne au sapin un aspect plus dense et plus touffu. </li>
          <li>Durée de conservation : Les nordmanns ont tendance à conserver leurs aiguilles plus longtemps, même après avoir été coupés, ce qui en fait un choix populaire pour ceux qui veulent un arbre de Noël qui dure longtemps.</li>
          <li>Parfum : Comparé aux épicéas, les nordmanns ont un parfum plus doux et subtil, ce qui est préféré par de nombreuses personnes.</li>
        </ul>
        <img className='nordmann_pic' src="../../../public/pictures/nordmann.png" alt="Photo nordmann" />
      </div>

      <div className='help'>
        <p>On vous aide à choisir le votre !</p>
        <p className='detail_help'>Si vous préférez un arbre de Noël avec un parfum fort et que vous n'avez pas besoin qu'il dure longtemps, un épicéa pourrait être un bon choix. Si vous préférez un arbre avec des aiguilles douces, un parfum subtil et une durée de conservation plus longue, alors un nordmann serait probablement plus adapté à vos besoins.</p>
      </div>
    </>
  )
}

export default About ;