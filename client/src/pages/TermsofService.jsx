import React from 'react';

const TermsofService = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing and using our website, you agree to be bound by these terms. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. User Conduct</h2>
        <p>
          You agree not to misuse the service or help anyone else do so. This includes not violating laws or infringing on others’ rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Content Ownership</h2>
        <p>
          All content on this website is owned by the respective creators. You may not copy, distribute, or reuse without permission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Changes to Terms</h2>
        <p>
          We may modify these Terms of Service at any time. Continued use of the website means you accept the updated terms.
        </p>
      </section>
    </div>
  );
};

export default TermsofService;
