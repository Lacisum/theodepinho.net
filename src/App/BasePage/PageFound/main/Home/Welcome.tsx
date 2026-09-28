import { useContext } from 'react';
import { Theme, ThemeContext } from '@/Theme';

import './Welcome.css';

const Welcome = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* This container is there to center the welcome section */}
      <section id='welcome' className={theme}>
        <div id='welcome-content'>
          <img
            src='decoration/welcome.gif'
            alt="Un vieil écran cathodique de PC affichant le texte 'Welcome to my website', entouré de trois chatons curieux et joueurs. L'un, blond, est sur l'écran et le renifle. Un autre, blanc, est assis devant l'écran et lève la tête vers le texte. Le dernier, roux, est à deux pattes et semble essayer d'atteindre quelque chose sur le côté de l'écran avec ses pattes avant."
            width='193'
            height='181'
          />
          <p>
            <strong>Bonjour,</strong>
            <br />
            je suis Théo de Pinho,
            <br />
            ingénieur logiciel.
          </p>
        </div>
        <i className='fa-solid fa-angles-down' aria-hidden />
      </section>
      {theme === Theme.LIGHT && <div className='zigzag' aria-hidden />}
    </>
  );
};

export default Welcome;
