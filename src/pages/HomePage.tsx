import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteLink } from '../components/SiteLink';

const services = [
  { number: '01', title: 'Requisitos que orientam a entrega', text: 'Entrevistas e workshops para entender o problema. Regras de negócio, histórias de usuário e critérios de aceite para definir o que precisa ser desenvolvido.' },
  { number: '02', title: 'Produto com prioridades claras', text: 'Organização e refinamento do backlog, definição de escopo e alinhamento entre as necessidades dos usuários e a capacidade de entrega do time.' },
  { number: '03', title: 'Processos e sistemas conectados', text: 'Mapeamento de processos, análise funcional e acompanhamento de integrações. Apoio à homologação para verificar se a solução atende ao que foi combinado.' },
];
const steps = [
  { title: 'Entender', text: 'Ouvir as áreas envolvidas e identificar o problema, o contexto e as restrições.' },
  { title: 'Definir', text: 'Documentar o escopo, as regras e os critérios que vão orientar a entrega.' },
  { title: 'Acompanhar', text: 'Refinar com o time, esclarecer dúvidas e validar o comportamento da solução.' },
];
const whatsappUrl = `https://wa.me/5511984597523?text=${encodeURIComponent('Olá Pietro! Gostaria de conversar sobre um projeto.')}`;

export function HomePage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return <div className="professional-home">
    <section className="intro-section">
      <div className="editorial-container intro-grid">
        <div>
          <p className="eyebrow">Análise de negócios · Requisitos · Produto</p>
          <h1>O negócio precisa de clareza.<br /><em>A tecnologia também.</em></h1>
          <p className="intro-copy">Sou Pietro Cosentino. Ajudo áreas de negócio e times de tecnologia a transformar necessidades em requisitos, prioridades e entregas bem definidas.</p>
          <div className="intro-actions">
            <a className="primary-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar sobre um projeto <ArrowUpRight size={18} /></a>
            <SiteLink className="text-link" href="/experiencia" onNavigate={onNavigate}>Conhecer minha experiência <ArrowRight size={17} /></SiteLink>
          </div>
        </div>
        <aside className="intro-note" aria-label="Resumo profissional">
          <span className="note-label">Experiência profissional</span>
          <strong>9 anos</strong>
          <p>entre negócios, produtos digitais e análise de sistemas.</p>
          <div className="note-rule" />
          <span className="note-label">Da definição à homologação</span>
          <p>Uma referência funcional para conectar quem precisa da solução a quem vai desenvolvê-la.</p>
          <SiteLink className="text-link" href="/sobre" onNavigate={onNavigate}>Sobre mim <ArrowRight size={16} /></SiteLink>
        </aside>
      </div>
    </section>

    <section className="services-section" aria-labelledby="atuacao-titulo">
      <div className="editorial-container">
        <div className="section-heading">
          <div><p className="eyebrow">Onde posso contribuir</p><h2 id="atuacao-titulo">Do problema à definição<br />do que precisa ser feito.</h2></div>
          <SiteLink className="text-link" href="/solucoes" onNavigate={onNavigate}>Ver minha atuação <ArrowRight size={17} /></SiteLink>
        </div>
        <div className="service-list">{services.map(service => <article key={service.number} className="service-row">
          <span className="service-number">{service.number}</span>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </article>)}</div>
      </div>
    </section>

    <section className="practice-section" aria-labelledby="pratica-titulo">
      <div className="editorial-container practice-grid">
        <div><p className="eyebrow">Experiência na prática</p><h2 id="pratica-titulo">Negócio e tecnologia<br />na mesma conversa.</h2>
          <p className="section-copy">Minha atuação passa pelo levantamento de necessidades, documentação funcional, gestão de backlog e validação das entregas. Trabalho próximo das áreas de negócio e dos times técnicos ao longo desse processo.</p>
          <SiteLink className="text-link" href="/experiencia" onNavigate={onNavigate}>Explorar os contextos de atuação <ArrowRight size={17} /></SiteLink>
        </div>
        <dl className="practice-details">
          <div><dt>Sistemas SaaS</dt><dd>Experiência com produtos e sistemas oferecidos como serviço.</dd></div>
          <div><dt>Documentação funcional</dt><dd>Histórias de usuário, regras de negócio, critérios de aceite e fluxos de processo.</dd></div>
          <div><dt>Colaboração com o time</dt><dd>Discovery, refinamento, esclarecimento de requisitos e apoio à homologação.</dd></div>
        </dl>
      </div>
    </section>

    <section className="method-section" aria-labelledby="metodo-titulo">
      <div className="editorial-container">
        <div className="section-heading"><div><p className="eyebrow">Como trabalho</p><h2 id="metodo-titulo">Antes de construir,<br />alinhar o que importa.</h2></div><SiteLink className="text-link" href="/metodologia" onNavigate={onNavigate}>Conhecer o processo <ArrowRight size={17} /></SiteLink></div>
        <ol className="method-list">{steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </div>
    </section>

    <section className="contact-section" aria-labelledby="contato-titulo">
      <div className="editorial-container contact-grid"><div><p className="eyebrow">Vamos conversar</p><h2 id="contato-titulo">Qual problema você<br />precisa resolver?</h2><p>Conte o contexto do seu projeto e o que precisa avançar.</p></div><div className="contact-actions"><a className="primary-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp <ArrowUpRight size={18} /></a><a className="text-link" href="mailto:pietrocosentino88@gmail.com">Enviar um e-mail <ArrowRight size={17} /></a></div></div>
    </section>
  </div>;
}
