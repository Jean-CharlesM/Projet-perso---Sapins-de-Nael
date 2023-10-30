import './styles.scss' ;

const Contact = () => {
  return (
    <div>
      <p className="title_contact">Vous souhaitez nous contacter ? Nous vous invitons à remplir le formulaire ci-dessous.</p>
      <form className='form_contact' action="mailto:votreadresseemail@example.com" method="post" encType="text/plain">
        <label htmlFor="nom">Nom : </label>
        <input type="text" id="nom" name="nom" required /><br />

        <label htmlFor="prenom">Prénom : </label>
        <input type="text" id="prenom" name="prenom" required /><br />

        <label htmlFor="email">Adresse Email : </label>
        <input type="email" id="email" name="email" required /><br />

        <label htmlFor="telephone">Numéro de Téléphone : </label>
        <input type="tel" id="telephone" name="telephone" /><br />

        <label htmlFor="message">Message : </label><br />
        <textarea id="message" name="message" rows="4" cols="50"></textarea><br />

        <input className='send' type="submit" value="Envoyer" />
      </form>
    </div>
  )
}

export default Contact ;