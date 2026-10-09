import { profile } from "../data/profile";
import { PageIntro } from "../components/portfolio/PageIntro";
import { ContactLinks } from "../components/portfolio/ContactLinks";
import { ResumeLink } from "../components/portfolio/ResumeLink";
export function ContactPage() {
  return (
    <div className="professional-home portfolio-page">
      <div className="editorial-container">
        <PageIntro eyebrow="Contato" title="Vamos conversar">
          <p>
            Para oportunidades em requisitos, análise funcional e produto, envie
            o contexto da vaga ou do projeto.
          </p>
        </PageIntro>
        <div className="practice-grid">
          <ContactLinks />
          <div className="contact-details">
            <h2>{profile.name}</h2>
            <p>{profile.location}</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>
              Você também pode consultar meu histórico profissional no
              currículo.
            </p>
            <ResumeLink className="secondary-link" />
          </div>
        </div>
      </div>
    </div>
  );
}
