export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-12">
        Privacy Policy
      </h1>

      <p className="mb-6 text-lg text-slate-700">
        This website does not collect or store personal data directly from users.
      </p>

      <p className="mb-6 text-lg text-slate-700">
        The site is hosted on Vercel. Basic technical information such as
        anonymized IP addresses, page views, and performance metrics may be
        processed through Vercel Analytics for the purpose of monitoring
        website performance and usage.
      </p>

      <p className="mb-6 text-lg text-slate-700">
        No user accounts, forms, marketing tracking tools, or advertising
        cookies are used on this website.
      </p>

      <p className="mb-6 text-lg text-slate-700">
        For any privacy-related inquiries, please contact:
        <br />
        <a
          href="mailto:contact@istmoenergy.net"
          className="text-[#0b879bfe] hover:underline"
        >
          contact@istmoenergy.net
        </a>
      </p>

      <p className="text-sm text-slate-400 mt-12">
        Last updated: January 2026
      </p>
    </div>
  );
}
