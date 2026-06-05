import { useContext } from 'react';

import './CV-list.css';
import { ThemeContext } from '../../../../../Theme';

const ProfessionalExperiences = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section>
      <h3>Expériences professionnelles</h3>
      <ol id='jobs-list' className='cv-list'>
        <li className='job'>
          <h4 className='title'>
            Stage - Développement de l'application et du site web de Solfy
          </h4>
          <div className={`details ${theme}`}>Mai 2026 - en cours, Solfy</div>
        </li>
        <li className='job'>
          <h4 className='title'>
            Stage - Développement du site web <code>dezrann.net</code>
          </h4>
          <div className={`details ${theme}`}>
            Avril 2024 - Juillet 2024, CRIStAL, Algomus
          </div>
        </li>
      </ol>
    </section>
  );
};

export default ProfessionalExperiences;
