import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-blue-50 text-center p-6 font-sans">
      <header className="bg-white shadow rounded-xl p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900">Ambate Vishnu Reddy</h1>
        <p className="text-lg text-gray-700">Junior Data Analyst | Python - Java - MySQL - HTML</p>
        <p className="text-sm text-gray-600">
          Hyderabad, India | ydder99@gmail.com | 
          <a href="https://github.com/settings/profile" className="text-blue-600 underline" target="_blank">GitHub</a>
        </p>
        <a
          href="/resumef.pdf"
          download
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          📄 Download Resume
        </a>
      </header>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Certifications</h2>

        <div className="grid gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium">AI for Techies: Python Using AI Workshop</h3>
            <p className="text-sm text-gray-600">Issued: June 15, 2025</p>
            <img
              src="/certificate_ai_for_techies.jpg"
              alt="AI Workshop Certificate"
              className="rounded mt-2 w-full"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium">Fraud Detection in Banking - SMEC Conference</h3>
            <p className="text-sm text-gray-600">Presented: December 2024</p>
            <img
              src="/certificate_fraud_detection.jpg"
              alt="Fraud Detection Certificate"
              className="rounded mt-2 w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
