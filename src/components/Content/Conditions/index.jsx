import './styles.scss'

const Conditions = () => {
  return (
    <div>
      <h2 className="title_mention">Mentions légales</h2>
      <p>Ce site web est édité par :
      <ul>
        <li>Raison sociale : AILLOT QUENTIN (EI)</li>
        <li>Enseigne : Quentin Aillot</li>
        <li>Adresse : 18 rue Ambroise Pare, 38670 Chasse sur Rhône</li>
        <li>Forme juridique : Commerçant</li>
        <li>Immatriculé RCS au greffe du tribunal de Vienne le 20/06/2022</li>
        <li>SIREN : 914 644 570</li>
        <li>SIRET : 914 644 570 00014</li>
        <li>Numéro de TVA : FR50914644570</li>
        <li>Activité (code APE / NAF) : 4622Z / Commerce de gros (commerce interentreprises) de fleurs et plantes</li>
        </ul>
      </p>
      <h2 className="title_mention">Conditions générales de ventes (CGV)</h2>
        <ul className='cgv'>
          <li>Objet : Les présentes conditions générales de vente régissent l'ensemble des transactions commerciales effectuées sur le site web de Quentin Aillot (ci-après "le Site"). En passant commande sur le Site, le client reconnaît avoir pris connaissance et accepté sans réserve les présentes conditions générales de vente. </li>
          <li>Produits et prix : Les produits proposés à la vente sont décrits et présentés avec la plus grande exactitude possible. Les prix sont indiqués en euros, toutes taxes comprises (TVA et autres taxes applicables au jour de la commande), hors frais de livraison.</li>
          <li>Commandes : Le client peut réserver un produit sur le Site en suivant le processus de réservation. Le client devra alors choisir un lieu de retrait et paiera directement sur place. Quentin Aillot se réserve le droit d'annuler toute réservation d'un client avec lequel il existerait un litige relatif au paiement d'une commande antérieure.</li>
          <li>Réservation : XXX A COMPLETER</li>
          <li>Responsabilité : Quentin Aillot ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du Site ou de l'impossibilité d'utiliser le Site. </li>
          <li>Loi applicable et litiges : Les présentes conditions générales de vente sont soumises à la loi française. En cas de litige, les tribunaux français seront seuls compétents. </li>
        </ul>

    </div>
  )
}

export default Conditions ;