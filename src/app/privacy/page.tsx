'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const lastUpdated = 'April 13, 2026';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <section style={{ padding: '120px 0 80px', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '780px' }}>

            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700,
              color: 'var(--ink)', letterSpacing: '-1px', lineHeight: 1.2,
              marginBottom: '12px',
            }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--ink3)', marginBottom: '48px' }}>
              Last updated: {lastUpdated}
            </p>

            <div className="legal-content">
              <style jsx>{`
                .legal-content h2 {
                  font-size: 20px; font-weight: 700; color: var(--ink);
                  margin: 48px 0 16px; letter-spacing: -0.3px;
                }
                .legal-content h2:first-of-type { margin-top: 0; }
                .legal-content h3 {
                  font-size: 16px; font-weight: 600; color: var(--ink);
                  margin: 28px 0 10px;
                }
                .legal-content p, .legal-content li {
                  font-size: 14.5px; color: var(--ink2); line-height: 1.75;
                  margin-bottom: 12px;
                }
                .legal-content ul, .legal-content ol {
                  padding-left: 20px; margin-bottom: 16px;
                }
                .legal-content li { margin-bottom: 6px; }
                .legal-content strong { color: var(--ink); font-weight: 600; }
              `}</style>

              <h2>1. Introduction</h2>
              <p><strong>Oktuv</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at www.oktuvglobal.com (&quot;Website&quot;), use our services, or interact with us in any other way.</p>
              <p>By using our Website or engaging our services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our Website or services.</p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>We collect information that you voluntarily provide to us, including:</p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title, and any other information submitted through contact forms, booking forms, or email correspondence.</li>
                <li><strong>Business Information:</strong> Details about your business, industry, requirements, goals, and challenges shared during consultations, discovery calls, or project onboarding.</li>
                <li><strong>Account Credentials:</strong> Access credentials for third-party platforms (e.g., hosting, analytics, CMS) provided to us for the purpose of delivering services. These are stored securely and used solely for service delivery.</li>
                <li><strong>Payment Information:</strong> Billing details, invoicing information, and GST/tax identification numbers. We do not store full credit card or bank account numbers directly; payment processing is handled by secure third-party payment processors.</li>
                <li><strong>Communication Data:</strong> Records of communications between you and our team, including emails, messages, meeting notes, and feedback.</li>
              </ul>

              <h3>2.2 Information Collected Automatically</h3>
              <p>When you visit our Website, we may automatically collect:</p>
              <ul>
                <li><strong>Device &amp; Browser Information:</strong> IP address, browser type and version, operating system, device type, screen resolution, and language preferences.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, referral sources, and navigation paths through the Website.</li>
                <li><strong>Cookies &amp; Similar Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to enhance your experience. See Section 7 for detailed cookie information.</li>
              </ul>

              <h3>2.3 Information from Third Parties</h3>
              <p>We may receive information about you from third-party sources, including:</p>
              <ul>
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Marketing platforms (e.g., advertising networks)</li>
                <li>Publicly available business information (e.g., LinkedIn, company websites)</li>
                <li>Referrals from existing clients or partners</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our web development, AI automation, marketing, design, and consulting services.</li>
                <li><strong>Communication:</strong> To respond to inquiries, schedule consultations, send project updates, and provide customer support.</li>
                <li><strong>AI &amp; Analytics Services:</strong> To develop, configure, and operate AI solutions (FlowAI, FlowBot) and analytics dashboards on your behalf. Your business data processed through these services is used solely for your engagement.</li>
                <li><strong>Marketing:</strong> To send relevant updates, case studies, insights, and promotional materials. You can opt out at any time.</li>
                <li><strong>Website Improvement:</strong> To analyze usage patterns, optimize user experience, and improve Website functionality.</li>
                <li><strong>Legal &amp; Compliance:</strong> To comply with applicable laws, enforce our terms, and protect our rights and the rights of others.</li>
                <li><strong>Fraud Prevention:</strong> To detect, prevent, and address technical issues, security threats, and fraudulent activity.</li>
              </ul>

              <h2>4. AI-Specific Data Practices</h2>
              <h3>4.1 FlowAI (Analytics Platform)</h3>
              <p>When providing FlowAI analytics services, we may access and process your business data (databases, data warehouses, APIs) to enable conversational intelligence features. This data:</p>
              <ul>
                <li>Remains your sole property at all times.</li>
                <li>Is processed only to deliver the contracted analytics services.</li>
                <li>Is not used to train general-purpose AI models.</li>
                <li>Is not shared with other clients or third parties except as required by the third-party AI providers powering the service (e.g., OpenAI, Anthropic, Google).</li>
                <li>May be cached temporarily for performance optimization and is purged according to the data retention schedule agreed upon in your SOW.</li>
              </ul>

              <h3>4.2 FlowBot (Chatbot Platform)</h3>
              <p>FlowBot chatbots may collect end-user data including:</p>
              <ul>
                <li>Conversation transcripts and chat history</li>
                <li>Contact information provided by end-users during conversations</li>
                <li>Interaction metadata (timestamps, channel, session duration)</li>
              </ul>
              <p>This data is collected on behalf of and owned by you (the Client). You are responsible for informing your end-users about data collection practices and obtaining any necessary consents in accordance with applicable privacy laws.</p>

              <h3>4.3 Third-Party AI Providers</h3>
              <p>Our AI services may route data through third-party AI model providers. We select providers that maintain enterprise-grade data protection policies. Data sent to these providers is used solely for generating responses and is subject to each provider&apos;s data processing agreement. We will disclose all third-party AI providers used in your engagement upon request.</p>

              <h2>5. Data Sharing &amp; Disclosure</h2>
              <p>We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in delivering our services (e.g., cloud hosting providers, payment processors, email services, analytics tools). These providers are contractually obligated to protect your data.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, subpoena, or governmental regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction. We will notify affected parties of any such transfer.</li>
                <li><strong>With Your Consent:</strong> When you have explicitly consented to the sharing of your information for a specific purpose.</li>
              </ul>

              <h2>6. Data Security</h2>
              <p>We implement industry-standard security measures to protect your information, including:</p>
              <ul>
                <li>Encryption of data in transit (TLS/SSL) and at rest where applicable.</li>
                <li>Secure credential management using encrypted vaults and environment variables.</li>
                <li>Role-based access controls limiting data access to authorized personnel only.</li>
                <li>Regular security assessments and monitoring of our systems.</li>
                <li>Separation of development, staging, and production environments.</li>
                <li>Secure deletion of data upon engagement termination or upon request.</li>
              </ul>
              <p>While we strive to use commercially acceptable means to protect your data, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.</p>

              <h2>7. Cookies &amp; Tracking Technologies</h2>
              <h3>7.1 Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the Website to function properly. These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the Website (e.g., Google Analytics). These collect anonymized usage data.</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings to provide a personalized experience.</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for the purpose of delivering relevant advertisements.</li>
              </ul>
              <h3>7.2 Managing Cookies</h3>
              <p>You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may impact the functionality of our Website. For more information, visit your browser&apos;s help documentation.</p>

              <h2>8. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Specifically:</p>
              <ul>
                <li><strong>Client engagement data:</strong> Retained for the duration of the engagement plus 3 years for legal and accounting purposes.</li>
                <li><strong>Contact form submissions:</strong> Retained for 2 years from the date of submission.</li>
                <li><strong>Website analytics data:</strong> Retained in anonymized form for up to 26 months.</li>
                <li><strong>AI/chatbot conversation data:</strong> Retained as specified in the applicable SOW. If no period is specified, data is retained for 12 months post-engagement.</li>
                <li><strong>Financial records:</strong> Retained as required by applicable tax and accounting laws (typically 8 years in India).</li>
              </ul>
              <p>Upon expiration of the retention period, data is securely deleted or anonymized.</p>

              <h2>9. Your Rights</h2>
              <p>Subject to applicable law, you have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your personal data in certain circumstances.</li>
                <li><strong>Portability:</strong> Request transfer of your data in a structured, commonly used, machine-readable format.</li>
                <li><strong>Objection:</strong> Object to the processing of your personal data for marketing purposes.</li>
                <li><strong>Withdrawal of Consent:</strong> Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of prior processing.</li>
              </ul>
              <p>To exercise any of these rights, please contact us at the address provided in Section 13. We will respond within 30 days of receiving your request.</p>

              <h2>10. Children&apos;s Privacy</h2>
              <p>Our Website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete such information.</p>

              <h2>11. International Data Transfers</h2>
              <p>Your information may be processed and stored in India and other countries where our service providers operate. By using our services, you consent to the transfer of your information to jurisdictions that may have different data protection laws than your country of residence. We take steps to ensure that your data receives an adequate level of protection regardless of where it is processed.</p>

              <h2>12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. Material changes will be notified through:</p>
              <ul>
                <li>A prominent notice on our Website</li>
                <li>Email notification to active clients</li>
              </ul>
              <p>We encourage you to review this page periodically. The &quot;Last updated&quot; date at the top indicates when the policy was last revised. Continued use of our Website or services after changes constitutes acceptance of the updated policy.</p>

              <h2>13. Contact Us</h2>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <p>
                <strong>Oktuv</strong><br />
                Email: privacy@oktuvglobal.com
              </p>
              <p>We aim to respond to all privacy-related inquiries within 30 days.</p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
