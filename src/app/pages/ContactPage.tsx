import { ContactBlock } from "../components/site/ContactBlock";

export function ContactPage() {
  return (
    <section className="pt-32 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ContactBlock standalone />
      </div>
    </section>
  );
}
