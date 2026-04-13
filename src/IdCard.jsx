import './IdCard.css';

const IdCard = () => {
  return (
    <section id="id-card">
      <p>
        Bonjour, je suis <br />
        <strong id="my-name">Théo de Pinho,</strong> <br />
        étudiant en 2e année de master d'informatique.
      </p>
      <img
        id="portrait"
        src="moi_circle.webp"
        alt="Portrait photo de Théo de Pinho"
        width="160"
        height="160"
      />
    </section>
  );
};

export default IdCard;
