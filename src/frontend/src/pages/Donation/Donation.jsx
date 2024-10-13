import React from 'react';
import Card from '../../components/Card/Card';
import './Donation.css';
import { useInView } from 'react-intersection-observer';

import bancoAlimentosImg from '../../public/assets/images/ongs/ong-banco-alimentos-card.png';
import misturaiImg from '../../public/assets/images/ongs/ong-misturai-card.png';
import stopHungerImg from '../../public/assets/images/ongs/ong-stop-hunger-card.png';
import acaoCidadaniaImg from '../../public/assets/images/ongs/ong-acao-cidadania-card.png';
import sescImg from '../../public/assets/images/ongs/ong-sesc-card.png';
import caritasBrasilImg from '../../public/assets/images/ongs/ong-caritas-brasileira-card.png';

const Donation = () => {
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true });

  return (
    <div className="donation-page">
      <h1>Escolha uma ONG para apoiar!</h1>
      <p className="donation-subtitle">
        Selecione uma das organizações abaixo e contribua diretamente para a luta contra a fome. <br/>
        Sua doação pode fazer toda diferença!
      </p>
      <div ref={cardsRef} className={`donation-cards ${cardsInView ? 'reveal' : ''}`}>
        <Card 
          title="Banco de Alimentos"
          description="Fundada em 1998, a ONG Banco de Alimentos é uma associação civil que recolhe alimentos que já perderam valor de prateleira no comércio e indústria, mas ainda estão aptos para consumo, e os distribui onde são mais necessários."
          link="https://bancodealimentos.colabore.org/doe-ong-banco-de-alimentos-pf/single_step?utm_campaign=pf&utm_medium=botao&utm_source=site"
          imageSrc={bancoAlimentosImg}
        />
        <Card 
          title="Misturaí"
          description="Criado em março de 2020, o projeto da ONG Misturaí, com sede no Rio Grande do Sul, surgiu em resposta ao aumento da fome e à crise econômica e sanitária. Seu objetivo é distribuir diariamente refeições para pessoas em vulnerabilidade social."
          link="https://misturai.com/como-ajudar/"
          imageSrc={misturaiImg}
        />
        <Card 
          title="Stop Hunger"
          description="O Stop Hunger, criado em 1996 por colaboradores da Sodexo nos EUA, é uma força global na luta contra a fome e a má nutrição. No Brasil, atua desde 2003 e, há seis anos, estabeleceu o Instituto Stop Hunger para promover iniciativas no país."
          link="https://br.stop-hunger.org/home/contact-form.html"
          imageSrc={stopHungerImg}
        />
        <Card 
          title="Ação Cidadania"
          description="A Ação da Cidadania trabalha para garantir que todos tenham acesso à alimentação adequada, unindo esforços em ações práticas e políticas. Eles possuem compromisso em transformar vidas, construindo um Brasil onde ninguém passe fome."
          link="https://www.acaodacidadania.org.br/como-apoiar"
          imageSrc={acaoCidadaniaImg}
        />
        <Card 
          title="Sesc - Mesa Brasil"
          description="A Sesc Mesa Brasil é a maior rede privada de bancos de alimentos da América Latina, combatendo a fome e o desperdício, a partir de doações de parceiros, e contribuindo para a garantia da segurança alimentar e nutricional em todo o Brasil."
          link="https://www.sesc.com.br/atuacoes/assistencia/sesc-mesa-brasil/participe/"
          imageSrc={sescImg}
        />
        <Card 
          title="Cáritas Brasileira - Sumaúma"
          description="As atividades são realizadas na cidade de Boa Vista, e o projeto tem como objetivo promover o acesso a refeições preparadas que atendam às necessidades e preferências nutricionais especializadas de grupos vulneráveis, como gestantes e bebês."
          link="https://caritas.org.br/colabore"
          imageSrc={caritasBrasilImg}
        />
      </div>
    </div>
  );
};

export default Donation;