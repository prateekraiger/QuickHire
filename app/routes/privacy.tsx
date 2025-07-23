import type { Route } from "./+types/privacy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy - QuickHire AI" },
    {
      name: "description",
      content: "Read the privacy policy for QuickHire AI.",
    },
  ];
}

export default function Privacy() {
  return (
    <main className="flex-1 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="prose prose-lg mx-auto">
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is important to us. It is QuickHire AI's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
          </p>
          <h2>1. Information we collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          <h2>2. How we use your information</h2>
          <p>
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
          </p>
          <h2>3. Cookies</h2>
          <p>
            We use cookies to improve your experience on our site. By using our site, you consent to our use of cookies.
          </p>
          <h2>4. Links to other sites</h2>
          <p>
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>
          <h2>5. Changes to our Privacy Policy</h2>
          <p>
            We reserve the right to update or change our Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </main>
  );
}
