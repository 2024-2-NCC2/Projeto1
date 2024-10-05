import React from 'react';
import './css/Home.css';
import reallyImage from '../public/assets/gifs/reality-foodpath-gif.gif';
import missionGif from '../public/assets/gifs/mission-foodpath-gif.gif';
import useCountUp from '../components/hooks/useCountUp';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import StatItem from '../components/StatItem';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const peopleWithoutFood = useCountUp(21100000, 3000);
  const peopleFoodInsecurity = useCountUp(70300000, 3000);
  const populationSevereHunger = useCountUp(9.9, 3000);
  const populationSevereHungerSecondDecimal = useCountUp(9, 3000);
  const populationModerateOrSevereHunger = useCountUp(32.8, 3000);
  const populationModerateOrSevereHungerSecondDecimal = useCountUp(8, 3000);
  const foodWasteTons = useCountUp(12580000, 3000);
  const foodWastePerPerson = useCountUp(60, 3000);

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div>
      <Carousel />
      
      <section ref={ref1} className={`content-section ${inView1 ? 'reveal' : ''}`}>
        <div className="text-content">
          <h2 className="text-title">A Realidade</h2>
          <p className='text-description'>
          A fome no Brasil é uma realidade devastadora e persistente, que afeta milhões de pessoas em todas as regiões do país. Este grave problema social não se resume apenas à falta de alimentos, mas reflete profundas desigualdades sociais, econômicas e regionais que há muito tempo moldam a estrutura do país. <b>Milhões de brasileiros vivem em situação de vulnerabilidade, sem acesso adequado a alimentos básicos e nutritivos </b>, o que gera impactos sérios e duradouros sobre sua saúde, desenvolvimento e bem-estar. <br/>
          <br/>
          <b>O FoodPath surge como uma iniciativa nesse sentido, um projeto que busca conscientizar, mobilizar e canalizar esforços para a erradicação da fome no Brasil.</b> Nossa plataforma visa não apenas destacar a gravidade do problema, mas também fornecer ferramentas e caminhos práticos para que todos possam contribuir ativamente para essa causa. <b>Somente com a união de forças e o compromisso coletivo poderemos garantir que, um dia, ninguém mais precise passar fome.</b>
          </p>
        </div>
        <div className="image-content">
          <img src={reallyImage} alt="Ilustração da fome" />
        </div>
      </section>

      <section ref={ref2} className={`stats-section ${inView2 ? 'reveal' : ''}`}>
        <div className="stats-wrapper">
          <div className="stats-grid">
            <StatItem number={peopleWithoutFood.toLocaleString()} description="pessoas que não têm o que comer todos os dias" />
            <StatItem number={peopleFoodInsecurity.toLocaleString()} description="possuem insegurança alimentar" />
            <StatItem number={`${populationSevereHunger},${populationSevereHungerSecondDecimal}%`} description="da população estão em situação grave" />
            <StatItem number={`${populationModerateOrSevereHunger},${populationModerateOrSevereHungerSecondDecimal}%`} description="da população estão em situação moderada ou grave" />
            <StatItem number={foodWasteTons.toLocaleString()} description="toneladas de alimentos são desperdiçadas por ano no Brasil" />
            <StatItem number={`${foodWastePerPerson} kg`} description="de comida são desperdiçadas por cada brasileiro por ano" />
          </div>
        </div>
        <p className="stats-footer">*Relatório publicado pela ONU - 2020/2022</p>
        <p className="stats-footer">*Dados do relatório FAO de 2021 e Rede Brasileira de Pesquisa em Soberania e Segurança Alimentar e Nutricional (Rede PENSSAN)</p>
      </section>

      <section ref={ref3} className={`mission-section ${inView3 ? 'reveal' : ''}`}>
        <div className="mission-text-section">
          <h2 className="mission-title">Nossa Missão</h2>
          <p className="mission-description">
          O FoodPath tem como missão mobilizar pessoas para fazer parte dessa luta. Acreditamos que, ao reunir esforços, podemos fazer a diferença na vida de quem mais precisa. <b>Nosso objetivo é conectar você a ONGs que trabalham diretamente com a doação de alimentos e recursos para as comunidades mais vulneráveis.</b> Ao colaborar com essas organizações, você se torna uma parte vital de uma rede que visa não apenas aliviar a fome, mas também proporcionar dignidade e esperança a milhões de brasileiros que enfrentam insegurança alimentar.<br/>
          <br/>
          A fome não pode esperar, e cada contribuição é um passo em direção à erradicação desse problema. Doar não é apenas um ato de solidariedade; é uma maneira de transformar realidades e construir um futuro mais justo. Imagine a diferença que você pode fazer: uma simples doação pode garantir que uma família tenha acesso a alimentos frescos e nutritivos, permitindo que crianças cresçam saudáveis e que adultos tenham energia para trabalhar e cuidar de suas responsabilidades.<br/>
          <br/>
          Convidamos você a se juntar a nós nesta causa urgente e necessária. Sua generosidade pode iluminar o caminho de quem vive em situações de vulnerabilidade. Cada gesto conta, e juntos, <b>podemos criar um Brasil onde a fome seja apenas uma lembrança do passado. Vamos unir forças e agir!</b>
          </p>
        </div>
        <div className="mission-image-section">
          <img src={missionGif} alt="Image Icon mission" />
        </div>
      </section>

      <section ref={ref4} className={`call-to-action-section ${inView4 ? 'reveal' : ''}`}>
        <h2 className="cta-title">Junte-se a nós nessa causa!</h2>
        <p className="cta-description">Seu apoio pode levar esperança e comida para quem mais precisa.</p>
        <Link to="/donation" className="cta-button">Faça uma doação!</Link>
      </section>
    </div>
  );
};

export default Home;