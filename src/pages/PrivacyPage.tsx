export function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="shell legal-shell">
        <p className="eyebrow">Privacy</p>
        <h1>Your privacy matters.</h1>
        <p className="legal-intro">
          This website is designed to provide information about Workspace
          Wellness without collecting personal information through forms or
          user accounts.
        </p>
        <section>
          <h2>Contacting us</h2>
          <p>
            If you contact us by email or telephone, the information you
            provide will be used only to respond to your enquiry and arrange
            services where requested.
          </p>
        </section>
        <section>
          <h2>Booking consultations</h2>
          <p>
            Consultation links open Calendly, an external service with its own
            privacy and cookie policies. Please review those policies before
            submitting your details.
          </p>
        </section>
        <section>
          <h2>External links</h2>
          <p>
            This website links to Instagram, LinkedIn and Calendly. Workspace
            Wellness is not responsible for the privacy practices of external
            websites.
          </p>
        </section>
        <section>
          <h2>Questions</h2>
          <p>
            For privacy questions, email{" "}
            <a href="mailto:yvonne@workspacewellness.ie">
              yvonne@workspacewellness.ie
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
