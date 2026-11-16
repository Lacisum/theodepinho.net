import { useContext } from 'react';

import { ThemeContext } from '@/Theme';

import './CV-list.css';

const ProfessionalExperiences = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section>
      <h3>Expériences professionnelles</h3>
      <ol id='jobs-list' className='cv-list'>
        <li className='job'>
          <h4 className='title'>
            Stage de développement front-end web & mobile
          </h4>
          <div className={`details ${theme}`}>
            Mai 2026 - Septembre 2026, Solfy
          </div>
        </li>
        <li className='job'>
          <h4 className='title'>Stage de développement back-end</h4>
          <div className={`details ${theme}`}>
            Avril 2024 - Juillet 2024, CRIStAL, Algomus
          </div>
        </li>
        <li className='job'>
          <h4 className='title'>Agent municipal saisonnier - Capitainerie</h4>
          <div className={`details ${theme}`}>Août 2021, Mairie de Cambrai</div>
        </li>
        <li className='job'>
          <h4 className='title'>Agent municipal saisonnier - Espaces verts</h4>
          <div className={`details ${theme}`}>Août 2020, Mairie de Cambrai</div>
        </li>
      </ol>
    </section>
  );
};

export default ProfessionalExperiences;
