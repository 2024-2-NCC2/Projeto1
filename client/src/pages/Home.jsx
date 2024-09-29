import React from 'react';
import Carousel from '../components/Carousel';
import '../pages/css/Home.css';
import useCountUp from '../components/hooks/useCountUp';

const Home = () => {
  const peopleWithoutFood = useCountUp(21100000, 3000);
  const peopleFoodInsecurity = useCountUp(70300000, 3000);
  
  const populationSevereHunger = useCountUp(9.9, 3000);
  const populationSevereHungerSecondDecimal = useCountUp(9, 3000); 
  
  const populationModerateOrSevereHunger = useCountUp(32.8, 3000);
  const populationModerateOrSevereHungerSecondDecimal = useCountUp(8, 3000); 

  const foodWasteTons = useCountUp(12580000, 3000);
  const foodWastePerPerson = useCountUp(60, 3000);

  return (
    <div>
      <Carousel />
      <section className="content-section">
        <div className="text-content">
          <h2 className='text-title'>A Realidade</h2>
          <p className='text-description'>
          A fome no Brasil é uma realidade devastadora e persistente, que afeta milhões de pessoas em todas as regiões do país. Este grave problema social não se resume apenas à falta de alimentos, mas reflete profundas desigualdades sociais, econômicas e regionais que há muito tempo moldam a estrutura do país. Milhões de brasileiros vivem em situação de vulnerabilidade, sem acesso adequado a alimentos básicos e nutritivos, o que gera impactos sérios e duradouros sobre sua saúde, desenvolvimento e bem-estar. <br/>
          <br/>
          O FoodPath surge como uma iniciativa nesse sentido, um projeto que busca conscientizar, mobilizar e canalizar esforços para a erradicação da fome no Brasil. Nossa plataforma visa não apenas destacar a gravidade do problema, mas também fornecer ferramentas e caminhos práticos para que todos possam contribuir ativamente para essa causa. Somente com a união de forças e o compromisso coletivo poderemos garantir que, um dia, ninguém mais precise passar fome.
          </p>
        </div>
        <div className="image-content">
          <img src="https://placehold.co/1400x920" alt="Ilustração da fome" />
        </div>
      </section>
      
      <section className="stats-section">
        <h2 className="stats-title">Dados referentes à fome no Brasil</h2>
        <div className="stats-wrapper">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{peopleWithoutFood.toLocaleString()}</span>
              <p className="stat-description">pessoas que não têm o que comer todos os dias</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">{peopleFoodInsecurity.toLocaleString()}</span>
              <p className="stat-description">possuem insegurança alimentar</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">{populationSevereHunger},{populationSevereHungerSecondDecimal}%</span>
              <p className="stat-description">da população estão em situação grave</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">{populationModerateOrSevereHunger},{populationModerateOrSevereHungerSecondDecimal}%</span>
              <p className="stat-description">da população estão em situação moderada ou grave</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">{foodWasteTons.toLocaleString()}</span>
              <p className="stat-description">toneladas de alimentos são desperdiçadas por ano no Brasil</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">{foodWastePerPerson} kg</span>
              <p className="stat-description">de comida são desperdiçadas por cada brasileiro por ano</p>
            </div>
          </div>
        </div>
        <p className="stats-footer">*Relatório publicado pela ONU - 2020/2022</p>
        <p className="stats-footer">*Dados do relatório FAO de 2021 e Rede Brasileira de Pesquisa em Soberania e Segurança Alimentar e Nutricional (Rede PENSSAN)</p>
      </section>
    </div>
  );
};

export default Home;