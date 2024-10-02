import React from 'react';
import './css/Home.css';
import exempleImage from '../public/assets/images/exemple-image-home.jpg';
import missionGif from '../public/assets/gifs/mission-foodpath-gif.gif';

import useCountUp from '../components/hooks/useCountUp';
import { Link } from 'react-router-dom';

import Carousel from '../components/Carousel';
import StatItem from '../components/StatItem';

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
          <img src={exempleImage} alt="Ilustração da fome" />
        </div>
      </section>
      <section className="stats-section">
        <div className="stats-wrapper">
          <div className="stats-grid">
            <StatItem 
              number={peopleWithoutFood.toLocaleString()} 
              description="pessoas que não têm o que comer todos os dias" 
            />
            <StatItem
              number={peopleFoodInsecurity.toLocaleString()} 
              description="possuem insegurança alimentar" 
            />
            <StatItem 
              number={`${populationSevereHunger},${populationSevereHungerSecondDecimal}%`} 
              description="da população estão em situação grave" 
            />
            <StatItem 
              number={`${populationModerateOrSevereHunger},${populationModerateOrSevereHungerSecondDecimal}%`} 
              description="da população estão em situação moderada ou grave" 
            />
            <StatItem 
              number={foodWasteTons.toLocaleString()} 
              description="toneladas de alimentos são desperdiçadas por ano no Brasil" 
            />
            <StatItem 
              number={`${foodWastePerPerson} kg`} 
              description="de comida são desperdiçadas por cada brasileiro por ano" 
            />
          </div>
        </div>
        <p className="stats-footer">*Relatório publicado pela ONU - 2020/2022</p>
        <p className="stats-footer">*Dados do relatório FAO de 2021 e Rede Brasileira de Pesquisa em Soberania e Segurança Alimentar e Nutricional (Rede PENSSAN)</p>
      </section>
      <section className="mission-section">
        <div className="mission-text-section">
          <h2 className="mission-title">Nossa Missão</h2>
          <p className="mission-description">
            O FoodPath tem como missão mobilizar pessoas para fazer parte dessa luta. Acreditamos que, ao reunir esforços, podemos fazer a diferença na vida de quem mais precisa. Nosso objetivo é conectar você a ONGs que trabalham diretamente com a doação de alimentos e recursos para as comunidades mais vulneráveis.<br/>
            <br/>
            A fome não pode esperar, e cada contribuição é um passo em direção à erradicação desse problema. Doar não é apenas um ato de solidariedade, mas uma maneira de transformar realidades e construir um futuro mais justo.
          </p>
        </div>
        <div className="mission-image-section">
          <img src={missionGif} alt="Image Icon mission" />
        </div>
      </section>
      <section className="call-to-action-section">
        <h2 className="cta-title">Junte-se a nós nessa causa!</h2>
        <p className="cta-description">
          Seu apoio pode levar esperança e comida para quem mais precisa.
        </p>
        <Link to="/donation" className="cta-button">
          Faça uma doação!
        </Link>
      </section>
    </div>
  );
};

export default Home;