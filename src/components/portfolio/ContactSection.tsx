import { ContactLinks } from "./ContactLinks";
export function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="editorial-container contact-grid">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 id="contact-heading">
            Vamos conversar sobre
            <br />
            uma oportunidade?
          </h2>
          <p>
            Envie o contexto da vaga ou do projeto e a melhor forma de contato.
          </p>
        </div>
        <ContactLinks />
      </div>
    </section>
  );
}
