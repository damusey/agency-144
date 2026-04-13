'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const lastUpdated = 'April 13, 2026';

export default function TermsPage() {
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
              Terms &amp; Conditions
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
              <p>These Terms and Conditions (&quot;Terms&quot;) govern your use of the services provided by <strong>Oktuv</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By engaging our services, signing a Statement of Work (&quot;SOW&quot;), or using our website at www.oktuvglobal.com (&quot;Website&quot;), you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms.</p>
              <p>If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity. If the entity has not yet been formally registered, you accept personal liability under these Terms until such registration is completed.</p>

              <h2>2. Services</h2>
              <p>Oktuv provides the following services, which may be engaged individually or as part of a bundled engagement:</p>
              <ul>
                <li><strong>Web Development &amp; Design</strong> — Custom website design, development, and maintenance using modern frameworks and technologies.</li>
                <li><strong>AI Automation &amp; Integration</strong> — Development and deployment of AI-powered solutions including conversational analytics (FlowAI), intelligent chatbots (FlowBot), and custom AI agents.</li>
                <li><strong>Performance Marketing</strong> — Paid media management, campaign strategy, analytics, and conversion optimization across digital channels.</li>
                <li><strong>Brand &amp; UI/UX Design</strong> — Visual identity creation, interface design, and user experience optimization.</li>
                <li><strong>White-Label Solutions</strong> — Development of products, platforms, and digital assets to be launched and operated under the Client&apos;s brand identity.</li>
                <li><strong>Data Infrastructure</strong> — Data pipeline architecture, dashboard development, and analytics integration.</li>
              </ul>
              <p>The specific scope, deliverables, timelines, and fees for each engagement will be documented in a mutually agreed-upon SOW or proposal.</p>

              <h2>3. Engagement &amp; Onboarding</h2>
              <h3>3.1 Pre-Registration Clients</h3>
              <p>We work with individuals and entities at all stages, including those that have not yet been formally incorporated or registered. In such cases, the individual(s) signing the SOW or proposal accept personal liability for all obligations under these Terms until a legal entity is established and assumes such obligations.</p>
              <h3>3.2 Commencement</h3>
              <p>Work commences upon: (a) mutual execution of a SOW or written acceptance of a proposal; and (b) receipt of any applicable advance payment as specified in the SOW.</p>
              <h3>3.3 Client Obligations</h3>
              <p>The Client agrees to:</p>
              <ul>
                <li>Provide complete, accurate, and timely information, assets, access credentials, and approvals required for the performance of services.</li>
                <li>Designate a single point of contact authorized to make decisions and provide feedback on behalf of the Client.</li>
                <li>Respond to communications and review requests within reasonable timeframes as outlined in the SOW.</li>
                <li>Ensure that all materials, data, and content provided to Oktuv do not infringe upon third-party intellectual property rights.</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <h3>4.1 Client Ownership</h3>
              <p>Upon full payment of all applicable fees, the Client shall own 100% of all custom deliverables created specifically for the engagement, including but not limited to: source code, design files, documentation, data pipelines, AI model configurations, trained models (where applicable), and all related assets.</p>
              <h3>4.2 Delivery of Assets</h3>
              <p>All deliverables will be created and maintained in accounts owned by or accessible to the Client (e.g., GitHub, AWS, Google Cloud, Vercel, Figma). Upon termination of the engagement, the Client retains full access and ownership of all such assets.</p>
              <h3>4.3 Pre-Existing IP &amp; Tools</h3>
              <p>Oktuv retains ownership of its proprietary tools, frameworks, libraries, methodologies, and pre-existing intellectual property (&quot;Oktuv IP&quot;). Where Oktuv IP is used in the delivery of services, the Client is granted a perpetual, non-exclusive, royalty-free license to use such Oktuv IP solely as incorporated into the deliverables.</p>
              <h3>4.4 Third-Party Software</h3>
              <p>The deliverables may incorporate open-source or third-party software. Such software remains subject to its respective license terms. Oktuv will disclose all material third-party dependencies upon request.</p>
              <h3>4.5 Portfolio Rights</h3>
              <p>Oktuv may include a general description of the engagement in its portfolio and marketing materials, unless the Client has engaged white-label services or has explicitly requested confidentiality in writing.</p>

              <h2>5. White-Label Services</h2>
              <p>Where the Client engages white-label services:</p>
              <ul>
                <li>All deliverables will be branded exclusively under the Client&apos;s identity. Oktuv will not claim any public association with the deliverables.</li>
                <li>Oktuv will not disclose the existence of the white-label relationship to any third party without the Client&apos;s prior written consent.</li>
                <li>The Client is solely responsible for the representation, marketing, and end-user support of white-labeled products and services.</li>
                <li>The Client shall indemnify Oktuv against any claims arising from the Client&apos;s use, marketing, or distribution of white-labeled deliverables.</li>
              </ul>

              <h2>6. Payment Terms</h2>
              <h3>6.1 Fee Structure</h3>
              <p>Fees are structured as either: (a) monthly retainers; or (b) fixed-scope project-based fees. We do not bill on an hourly basis. All pricing is as specified in the applicable SOW.</p>
              <h3>6.2 Payment Schedule</h3>
              <p>Unless otherwise specified in the SOW:</p>
              <ul>
                <li><strong>Retainer engagements:</strong> Invoiced monthly in advance, due within 7 days of invoice date.</li>
                <li><strong>Project engagements:</strong> A non-refundable advance of 30–50% is due upon signing. Remaining fees are invoiced at milestones defined in the SOW.</li>
              </ul>
              <h3>6.3 Late Payment</h3>
              <p>Payments overdue by more than 15 days will incur a late fee of 1.5% per month on the outstanding balance. Oktuv reserves the right to pause all work and revoke access to deliverables until outstanding payments are settled.</p>
              <h3>6.4 Taxes</h3>
              <p>All fees are exclusive of applicable taxes (including GST). Taxes will be charged as per prevailing Indian tax law and applicable international tax regulations.</p>

              <h2>7. Confidentiality</h2>
              <p>Both parties agree to maintain the confidentiality of all proprietary, business, and technical information exchanged during the engagement (&quot;Confidential Information&quot;). This obligation survives the termination of the engagement for a period of 3 years.</p>
              <p>Confidential Information does not include information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was already known to the receiving party; (c) is independently developed; or (d) is disclosed pursuant to a legal requirement.</p>

              <h2>8. Data Handling &amp; AI Services</h2>
              <h3>8.1 Client Data</h3>
              <p>In the course of delivering AI and analytics services (including FlowAI and FlowBot), Oktuv may process, analyze, and store Client data. All Client data remains the sole property of the Client.</p>
              <h3>8.2 Data Processing</h3>
              <p>Oktuv will process Client data solely for the purpose of delivering the contracted services and will not use Client data for any other purpose, including training proprietary models, without explicit written consent.</p>
              <h3>8.3 AI-Generated Outputs</h3>
              <p>AI-powered services, including FlowAI analytics and FlowBot chatbot responses, are generated by artificial intelligence systems and may contain inaccuracies. The Client acknowledges that AI outputs should be validated before use in critical business decisions. Oktuv does not guarantee the accuracy, completeness, or suitability of AI-generated content for any specific purpose.</p>
              <h3>8.4 Third-Party AI Providers</h3>
              <p>Our AI services may utilize third-party language model providers (e.g., OpenAI, Anthropic, Google). Client data processed through these services is subject to the respective provider&apos;s data processing terms. We select providers with enterprise-grade data protection policies and will disclose all third-party AI providers used upon request.</p>

              <h2>9. Warranties &amp; Disclaimers</h2>
              <h3>9.1 Service Warranty</h3>
              <p>Oktuv warrants that all services will be performed in a professional, workmanlike manner consistent with industry standards. For a period of 30 days following delivery of any milestone, Oktuv will correct any defects or bugs in the deliverables at no additional charge, provided such defects are attributable to Oktuv&apos;s work.</p>
              <h3>9.2 Disclaimer</h3>
              <p>Except as expressly stated herein, all services and deliverables are provided &quot;as is.&quot; Oktuv makes no warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Oktuv does not warrant that any website, application, or service will be uninterrupted, error-free, or free of harmful components.</p>
              <h3>9.3 Results</h3>
              <p>While Oktuv strives to deliver measurable business impact, we do not guarantee specific revenue, traffic, conversion, or growth outcomes. Marketing, AI, and digital strategies are influenced by numerous external factors beyond our control.</p>

              <h2>10. Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law:</p>
              <ul>
                <li>Oktuv&apos;s total aggregate liability under these Terms shall not exceed the total fees paid by the Client under the applicable SOW in the 6-month period immediately preceding the claim.</li>
                <li>In no event shall Oktuv be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, profits, data, business opportunities, or goodwill.</li>
                <li>Oktuv shall not be liable for any losses arising from the Client&apos;s failure to maintain adequate backups, security practices, or access controls.</li>
              </ul>

              <h2>11. Indemnification</h2>
              <p>The Client agrees to indemnify, defend, and hold harmless Oktuv, its officers, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from: (a) the Client&apos;s breach of these Terms; (b) the Client&apos;s use of deliverables; (c) content or materials provided by the Client; or (d) the Client&apos;s violation of any applicable law.</p>

              <h2>12. Term &amp; Termination</h2>
              <h3>12.1 Term</h3>
              <p>These Terms remain in effect for the duration of the engagement as specified in the applicable SOW.</p>
              <h3>12.2 Termination for Convenience</h3>
              <p>Either party may terminate the engagement by providing 30 days&apos; written notice. The Client shall pay for all work completed and expenses incurred up to the effective date of termination.</p>
              <h3>12.3 Termination for Cause</h3>
              <p>Either party may terminate immediately upon written notice if the other party: (a) commits a material breach that remains uncured for 15 days after written notice; or (b) becomes insolvent or enters liquidation proceedings.</p>
              <h3>12.4 Effect of Termination</h3>
              <p>Upon termination: (a) all outstanding payments become immediately due; (b) the Client retains ownership of all paid-for deliverables; (c) each party shall return or destroy the other&apos;s Confidential Information; (d) provisions relating to IP ownership, confidentiality, limitation of liability, and indemnification shall survive.</p>

              <h2>13. Force Majeure</h2>
              <p>Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to natural disasters, pandemics, government actions, internet outages, cyberattacks, or disruptions to third-party services. The affected party shall notify the other party promptly and make reasonable efforts to mitigate the impact.</p>

              <h2>14. Dispute Resolution</h2>
              <h3>14.1 Governing Law</h3>
              <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
              <h3>14.2 Arbitration</h3>
              <p>Any dispute arising from or relating to these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, the dispute shall be referred to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, as amended. The seat of arbitration shall be Chandigarh, India. The language of arbitration shall be English.</p>
              <h3>14.3 Jurisdiction</h3>
              <p>Subject to the arbitration clause above, the courts of Chandigarh, India shall have exclusive jurisdiction over any matters arising under these Terms.</p>

              <h2>15. Miscellaneous</h2>
              <ul>
                <li><strong>Entire Agreement:</strong> These Terms, together with the applicable SOW, constitute the entire agreement between the parties and supersede all prior agreements, representations, and understandings.</li>
                <li><strong>Amendments:</strong> These Terms may be amended by Oktuv at any time. Material changes will be communicated to active Clients via email at least 30 days before they take effect.</li>
                <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.</li>
                <li><strong>Assignment:</strong> The Client may not assign or transfer its rights or obligations under these Terms without Oktuv&apos;s prior written consent.</li>
                <li><strong>Waiver:</strong> No failure or delay by either party in exercising any right under these Terms shall constitute a waiver of that right.</li>
                <li><strong>Notices:</strong> All formal notices under these Terms shall be in writing and delivered to the email addresses specified in the applicable SOW.</li>
              </ul>

              <h2>16. Contact</h2>
              <p>For questions regarding these Terms, please contact us at:</p>
              <p><strong>Oktuv</strong><br />Email: legal@oktuvglobal.com</p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
