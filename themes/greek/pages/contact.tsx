import { contact } from "@/lib/site-content";
import { ContactForm } from "../components/contact-form";
import { Wrap } from "../components/sections";

export function GreekContact() {
  return <section id="introduction" className="gk-contact">
    <Wrap><div className="gk-contact-grid">
      <div className="gk-contact-copy">
        <h1>{contact.title}</h1>
        <p className="gk-lead">{contact.body}</p>
        <a className="gk-mail" href={`mailto:${contact.email}`}>{contact.email}</a>
        <p className="gk-claim">{contact.mailtoNote}</p>
      </div>
      <ContactForm />
    </div></Wrap>
  </section>;
}
