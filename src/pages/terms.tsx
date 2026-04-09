import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

const TermsPage = () => {
  return (
    <MainLayout title='Terms & Conditions | CB360'>
      <div className='mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <article className='prose mx-auto lg:prose-xl prose-p:text-base prose-ol:text-base prose-ul:text-base'>
          {/* Title */}
          <h1 className='text-center'>Terms &amp; Conditions of Service</h1>
          <p className='text-center text-sm text-gray-500'>
            Effective Date: April 2026 &middot; Version: 2.1
          </p>

          <p>
            These Terms &amp; Conditions govern your access to and use of the
            CB360 WhatsApp Business Platform and related services. CB360 is a
            trade name operated by Silver Sparrow Trading W.L.L., a company
            registered in the Kingdom of Bahrain and an authorised Meta WhatsApp
            Business Solution Provider (BSP). By registering or using any CB360
            service, you agree to be bound by these Terms in full.
          </p>

          {/* 1. Parties & Definitions */}
          <div>
            <h2>1. Parties &amp; Definitions</h2>
            <p>
              In these Terms &amp; Conditions, the following terms have the
              meanings set out below:
            </p>
            <ul>
              <li>
                &quot;CB360&quot; or &quot;ConvoBot360&quot; means the platform
                and services operated under those trade names by Silver Sparrow
                Trading W.L.L., CR No. 170940-1, registered in the Kingdom of
                Bahrain.
              </li>
              <li>
                &quot;Silver Sparrow Trading W.L.L.&quot; means the legal entity
                that owns and operates the CB360 Platform, with registered
                address at Shop 116, Bldg 18, Road 4101, Block 0341, Juffair,
                Kingdom of Bahrain.
              </li>
              <li>
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; refers to
                Silver Sparrow Trading W.L.L., trading as CB360 / ConvoBot360.
              </li>
              <li>
                &quot;Client&quot;, &quot;you&quot;, or &quot;your&quot; means
                any individual, company, or legal entity that registers for,
                subscribes to, or uses the CB360 Platform.
              </li>
              <li>
                &quot;Platform&quot; means the CB360 software, dashboards, APIs,
                tools, and services accessible at convobot360.com and its
                subdomains.
              </li>
              <li>
                &quot;WhatsApp Business API&quot; or &quot;WABA&quot; means the
                WhatsApp Business Application Programming Interface provided by
                Meta Platforms, Inc., accessed by CB360 as an authorised Meta
                Business Solution Provider.
              </li>
              <li>
                &quot;Meta&quot; means Meta Platforms, Inc. and its subsidiaries,
                including WhatsApp LLC.
              </li>
              <li>
                &quot;WABA Account&quot; means a WhatsApp Business Account
                provisioned for the Client through the CB360 Platform.
              </li>
              <li>
                &quot;Subscription&quot; means a recurring paid plan (semi-annual
                or annual) selected by the Client for access to the Platform.
              </li>
              <li>
                &quot;Conversation&quot; means a 24-hour messaging session as
                defined and billed by Meta under the WhatsApp Business Platform
                pricing model.
              </li>
              <li>
                &quot;Personal Data&quot; has the meaning given under Bahrain Law
                No. 30 of 2018 (Personal Data Protection Law,
                &quot;PDPL&quot;).
              </li>
            </ul>
          </div>

          {/* 2. Acceptance of Terms */}
          <div>
            <h2>2. Acceptance of Terms</h2>
            <p>
              By creating an account, completing a subscription, or using any
              part of the CB360 Platform, you confirm that:
            </p>
            <ul>
              <li>
                You have read, understood, and agree to these Terms &amp;
                Conditions in full.
              </li>
              <li>
                You have the legal capacity and authority to enter into a binding
                agreement on behalf of yourself or your organisation.
              </li>
              <li>
                You agree to comply with Meta&apos;s WhatsApp Business Terms of
                Service, the WhatsApp Business Messaging Policy, and all other
                applicable Meta policies, which are incorporated into these Terms
                by reference.
              </li>
              <li>
                You acknowledge that CB360 is an authorised Meta Business
                Solution Provider and is not an agent, representative, or
                employee of Meta or WhatsApp LLC.
              </li>
            </ul>
            <p>
              If you do not agree to these Terms, you must not use the Platform.
            </p>
          </div>

          {/* 3. Services Provided */}
          <div>
            <h2>3. Services Provided</h2>

            <h3>3.1 WhatsApp Business API Access</h3>
            <p>
              CB360 provides managed access to the WhatsApp Business API as an
              authorised Meta Business Solution Provider. Services include:
            </p>
            <ul>
              <li>
                Onboarding and provisioning of WhatsApp Business Accounts
                (WABA).
              </li>
              <li>
                Message template creation, submission, and management with Meta.
              </li>
              <li>Chatbot and automation configuration and deployment.</li>
              <li>
                Conversational commerce tools including catalogue integration,
                payment link flows, and order management.
              </li>
              <li>Real-time analytics dashboards and reporting.</li>
              <li>Technical support and account management.</li>
            </ul>

            <h3>3.2 Additional Services</h3>
            <p>
              CB360 may also provide, subject to separate written agreement:
            </p>
            <ul>
              <li>Point-of-sale (POS) system integration.</li>
              <li>
                Payment gateway integration (including BenefitPay, Fawri+, and
                other regional providers).
              </li>
              <li>ERP and CRM integration services.</li>
              <li>Custom software development and API solutions.</li>
            </ul>

            <h3>3.3 Service Availability</h3>
            <p>
              CB360 targets 99.9% platform uptime but does not guarantee
              uninterrupted availability. Scheduled maintenance will be
              communicated in advance where practicable. Downtime attributable to
              Meta, WhatsApp, third-party providers, or force majeure events is
              outside CB360&apos;s control and shall not constitute a breach of
              these Terms.
            </p>
          </div>

          {/* 4. Meta & WhatsApp Compliance Obligations */}
          <div>
            <h2>4. Meta &amp; WhatsApp Compliance Obligations</h2>

            <h3>4.1 Mandatory Meta Policy Compliance</h3>
            <p>By using the Platform, you agree to comply fully with:</p>
            <ul>
              <li>
                Meta&apos;s WhatsApp Business Terms of Service
                (whatsapp.com/legal/business-terms).
              </li>
              <li>
                The WhatsApp Business Messaging Policy
                (business.whatsapp.com/policy).
              </li>
              <li>
                Meta&apos;s Business Solution Terms
                (whatsapp.com/legal/business-solution-terms).
              </li>
              <li>
                All other Meta platform policies as updated from time to time.
              </li>
            </ul>

            <h3>4.2 Permitted Use</h3>
            <p>
              You may only use the Platform and your WABA Account for lawful
              business communications, including:
            </p>
            <ul>
              <li>
                Sending messages exclusively to users who have explicitly opted
                in to receive communications from your business.
              </li>
              <li>
                Using only Meta-approved message templates for
                business-initiated (outbound) messaging.
              </li>
              <li>
                Accurately representing your business identity in all WhatsApp
                communications.
              </li>
              <li>
                Complying with all applicable anti-spam and electronic
                communications laws in each jurisdiction where you operate.
              </li>
            </ul>

            <h3>4.3 Prohibited Use</h3>
            <p>You must not use the Platform to:</p>
            <ul>
              <li>
                Send unsolicited, bulk, or spam messages to WhatsApp users.
              </li>
              <li>
                Promote or facilitate illegal goods, services, or activities
                under the laws of Bahrain or any applicable jurisdiction.
              </li>
              <li>
                Transmit offensive, discriminatory, sexually explicit,
                defamatory, or otherwise harmful content.
              </li>
              <li>Impersonate any person, business, or brand.</li>
              <li>
                Build or augment profiles on WhatsApp end-users using data
                obtained through the API.
              </li>
              <li>
                Engage in online gambling, cryptocurrency promotion, adult
                content, pharmaceutical sales, or other Meta-restricted
                categories without prior written approval from both CB360 and
                Meta.
              </li>
              <li>
                Share, resell, sublicense, or disclose WABA API credentials to
                any third party.
              </li>
              <li>
                Use any AI or large language model as the primary feature of
                your WhatsApp messaging flows, in compliance with Meta&apos;s AI
                Provider restrictions (effective 2025).
              </li>
              <li>
                Reverse-engineer, decompile, or attempt to extract source code
                from the CB360 Platform.
              </li>
            </ul>

            <h3>4.4 Message Template Compliance</h3>
            <p>
              All message templates are subject to Meta&apos;s review and
              approval. CB360 submits templates on your behalf but cannot
              guarantee approval or approval timelines. You are solely
              responsible for ensuring template content complies with
              Meta&apos;s policies. Template rejection by Meta is not grounds
              for a refund.
            </p>

            <h3>4.5 Client Liability for Third Parties</h3>
            <p>
              Where you engage sub-processors, agents, or third-party service
              providers who access the Platform on your behalf, you remain
              solely and fully liable for their acts and omissions. Any breach
              by such parties shall be deemed a breach by you.
            </p>
          </div>

          {/* 5. Account Registration & Security */}
          <div>
            <h2>5. Account Registration &amp; Security</h2>
            <ul>
              <li>
                You must provide accurate, complete, and current information at
                registration, including your business name, commercial
                registration details, and valid contact information.
              </li>
              <li>
                You are responsible for all activity under your account and for
                maintaining the confidentiality of your login credentials.
              </li>
              <li>
                You must notify CB360 immediately at{' '}
                <a href='mailto:info@convobot360.com'>info@convobot360.com</a>{' '}
                upon becoming aware of any unauthorised access to or use of your
                account.
              </li>
              <li>
                CB360 reserves the right to suspend or terminate any account
                where we reasonably suspect fraudulent, abusive, or
                non-compliant activity, without liability.
              </li>
            </ul>
          </div>

          {/* 6. Fees, Billing & Payment */}
          <div>
            <h2>6. Fees, Billing &amp; Payment</h2>

            <h3>6.1 Subscription Plans</h3>
            <p>
              CB360 subscriptions are offered on a semi-annual (6-month) or
              annual (12-month) basis, charged in advance. All fees are
              denominated in Bahraini Dinars (BHD) unless otherwise agreed in
              writing. Your selected plan and pricing will be confirmed in your
              Order Form or invoice.
            </p>

            <h3>6.2 WhatsApp Conversation &amp; Messaging Charges</h3>
            <p>
              Meta charges per-conversation or per-template-message fees for use
              of the WhatsApp Business API. These charges are either included in
              your CB360 subscription plan or billed separately as pass-through
              charges at Meta&apos;s applicable rates, plus any CB360 platform
              markup as disclosed in your plan documentation.
            </p>

            <h3>6.3 Payment Terms</h3>
            <p>
              All subscription fees are due and payable in advance at the start
              of each subscription period. Late payments are subject to:
            </p>
            <ul>
              <li>
                A late payment charge of 1.5% per month on the overdue balance,
                or the maximum rate permitted under Bahraini law, whichever is
                lower.
              </li>
              <li>
                Suspension of Platform access after 7 calendar days of
                non-payment following written notice.
              </li>
              <li>
                Termination of your account after 30 calendar days of
                non-payment.
              </li>
            </ul>

            <h3>6.4 Taxes &amp; VAT</h3>
            <p>
              All fees are exclusive of applicable taxes. Where VAT or other
              taxes apply under Bahraini law or applicable GCC regulations,
              these will be itemised on your invoice. You are solely responsible
              for determining and remitting all applicable taxes on your own
              transactions and sales made through the Platform.
            </p>

            <h3>6.5 Refund Policy</h3>
            <p>
              Subscription fees are non-refundable except where required by
              applicable law. CB360 may, at its sole discretion, consider refund
              requests within 14 days of the first charge of a new subscription
              on a case-by-case basis. No refunds are issued for:
            </p>
            <ul>
              <li>
                Any portion of a subscription period already in progress.
              </li>
              <li>
                WhatsApp conversation or template message charges submitted to
                and incurred with Meta.
              </li>
              <li>
                Custom development, onboarding, or one-time setup fees.
              </li>
              <li>
                Accounts suspended or terminated due to policy violations.
              </li>
            </ul>
          </div>

          {/* 7. Data Protection & Privacy */}
          <div>
            <h2>7. Data Protection &amp; Privacy</h2>

            <h3>7.1 Bahrain Personal Data Protection Law (PDPL)</h3>
            <p>
              CB360 processes personal data in compliance with Bahrain Law No.
              30 of 2018 (the Personal Data Protection Law, &quot;PDPL&quot;)
              and the implementing resolutions issued by the Personal Data
              Protection Authority (PDPA) on 17 March 2022. In its capacity as
              a data processor acting on your instructions, CB360:
            </p>
            <ul>
              <li>
                Processes client customer data solely as instructed by you, for
                the purpose of delivering the Platform services.
              </li>
              <li>
                Implements appropriate administrative, physical, and technical
                safeguards to protect personal data against unauthorised access,
                loss, or disclosure.
              </li>
              <li>
                Does not sell, share, or disclose personal data to third parties
                except as required for service delivery or as mandated by
                applicable law or a competent authority.
              </li>
              <li>
                Deletes or returns your personal data upon termination of your
                subscription, subject to legal retention obligations.
              </li>
            </ul>

            <h3>7.2 Your Obligations as Data Controller</h3>
            <p>
              You are the data controller for all customer personal data
              processed through your WABA Account. You are responsible for:
            </p>
            <ul>
              <li>
                Obtaining valid, documented consent from your customers before
                contacting them via WhatsApp.
              </li>
              <li>Maintaining clear opt-in and opt-out records.</li>
              <li>
                Providing your customers with a privacy notice that discloses
                your use of WhatsApp for business communications.
              </li>
              <li>
                Handling data subject requests (access, rectification, deletion)
                under the PDPL within statutory timeframes.
              </li>
              <li>
                Ensuring your use of the Platform is lawful in every
                jurisdiction where your customers are located.
              </li>
            </ul>

            <h3>7.3 WhatsApp &amp; Meta Data</h3>
            <p>
              You acknowledge that Meta independently collects and processes
              certain data under its own privacy policy, which CB360 does not
              control. You must not use data obtained via the WhatsApp Business
              Solution to build consumer profiles, retarget users on or off
              WhatsApp, or share data with third parties, in accordance with
              Meta&apos;s Business Solution Terms.
            </p>

            <h3>7.4 Data Breach Notification</h3>
            <p>
              In the event of a confirmed personal data breach affecting your
              data processed by CB360, we will notify you without undue delay
              and no later than 72 hours of becoming aware, to enable you to
              fulfil your own PDPL notification obligations.
            </p>
            <p>
              CB360&apos;s full Privacy Policy is available separately and is
              incorporated into these Terms by reference.
            </p>
          </div>

          {/* 8. Intellectual Property */}
          <div>
            <h2>8. Intellectual Property</h2>
            <p>
              All intellectual property rights in the CB360 Platform, software,
              branding, documentation, and content (excluding your business
              content and data) are the exclusive property of Silver Sparrow
              Trading W.L.L. You are granted a limited, non-exclusive,
              non-transferable, revocable licence to access and use the Platform
              solely for your own internal business purposes during your
              subscription period.
            </p>
            <p>You must not:</p>
            <ul>
              <li>
                Copy, modify, distribute, or create derivative works based on
                the CB360 Platform or its content.
              </li>
              <li>
                Remove or obscure any CB360 or Meta proprietary notices or
                branding.
              </li>
              <li>
                Use CB360&apos;s name, logo, or branding in any way that implies
                you are CB360 or endorsed by CB360 without prior written
                consent.
              </li>
            </ul>
            <p>
              You retain full ownership of all business content, data, and
              messaging you create and transmit through the Platform.
            </p>
          </div>

          {/* 9. Disclaimer & Limitation of Liability */}
          <div>
            <h2>9. Disclaimer &amp; Limitation of Liability</h2>

            <h3>9.1 Platform Provided As-Is</h3>
            <p>
              The CB360 Platform is provided on an &quot;as is&quot; and
              &quot;as available&quot; basis. To the maximum extent permitted by
              applicable law, CB360 disclaims all warranties, express or
              implied, including warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>

            <h3>9.2 Third-Party &amp; Meta Dependency</h3>
            <p>
              CB360 is dependent on Meta&apos;s WhatsApp Business Platform.
              CB360 is not liable for:
            </p>
            <ul>
              <li>
                Any suspension, restriction, or termination of your WABA
                Account by Meta.
              </li>
              <li>
                Changes to Meta&apos;s pricing model, features, or policies.
              </li>
              <li>
                Message delivery failures, delays, or errors caused by
                Meta&apos;s infrastructure.
              </li>
              <li>
                Loss of service, data, or revenue caused by Meta, third-party
                providers, or events beyond CB360&apos;s reasonable control.
              </li>
            </ul>

            <h3>9.3 Cap on Liability</h3>
            <p>
              To the maximum extent permitted under Bahraini law, CB360&apos;s
              total aggregate liability for any claim arising out of or related
              to these Terms or the Platform shall not exceed the total
              subscription fees paid by you to CB360 in the three (3) months
              immediately preceding the event giving rise to the claim.
            </p>
            <p>
              In no event shall CB360 be liable for any indirect, incidental,
              special, consequential, or punitive damages, including loss of
              profits, business, revenue, data, or goodwill, whether in
              contract, tort, or otherwise.
            </p>
          </div>

          {/* 10. Indemnification */}
          <div>
            <h2>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Silver Sparrow
              Trading W.L.L. (trading as CB360), its directors, officers,
              employees, and agents from and against all claims, liabilities,
              damages, losses, costs, and expenses (including reasonable legal
              fees) arising out of or related to:
            </p>
            <ul>
              <li>
                Your use of the Platform in breach of these Terms or applicable
                law.
              </li>
              <li>
                Your breach of Meta&apos;s WhatsApp Business Terms of Service or
                Business Messaging Policy.
              </li>
              <li>
                Your failure to obtain valid customer opt-in consents prior to
                messaging.
              </li>
              <li>Any content you send through the Platform.</li>
              <li>
                Any misrepresentation made by you to CB360 or to your customers.
              </li>
              <li>
                Acts or omissions of your employees, agents, or sub-processors
                accessing the Platform on your behalf.
              </li>
            </ul>
          </div>

          {/* 11. Term & Termination */}
          <div>
            <h2>11. Term &amp; Termination</h2>

            <h3>11.1 Term</h3>
            <p>
              These Terms take effect on the date you create your CB360 account
              or first use the Platform and continue until your subscription is
              terminated or expires.
            </p>

            <h3>11.2 Termination by You</h3>
            <p>
              You may cancel your subscription at any time by providing written
              notice to{' '}
              <a href='mailto:info@convobot360.com'>info@convobot360.com</a>.
              Cancellation takes effect at the end of your current semi-annual
              or annual subscription period. No pro-rata refunds are issued for
              unused time within a paid period.
            </p>

            <h3>11.3 Termination by CB360</h3>
            <p>
              CB360 may suspend or terminate your account immediately and
              without prior notice if:
            </p>
            <ul>
              <li>
                You materially breach these Terms or Meta&apos;s policies and
                fail to remedy the breach within 7 days of written notice (where
                the breach is capable of remedy).
              </li>
              <li>
                You fail to pay outstanding fees following the notice period
                specified in Section 6.3.
              </li>
              <li>
                CB360 reasonably suspects fraudulent, illegal, or abusive
                activity on your account.
              </li>
              <li>
                Meta suspends or terminates CB360&apos;s Business Solution
                Provider status or restricts API access in a manner that
                prevents continued service.
              </li>
              <li>
                Continued provision of services would cause CB360 to violate
                applicable Bahraini or international law.
              </li>
            </ul>

            <h3>11.4 Effect of Termination</h3>
            <p>Upon termination:</p>
            <ul>
              <li>
                Your access to the Platform and WABA Account ceases immediately.
              </li>
              <li>
                CB360 will delete your data in accordance with Section 7 and
                Meta&apos;s data retention policies.
              </li>
              <li>
                All outstanding fees become immediately due and payable.
              </li>
              <li>Sections 7, 8, 9, 10, 12, and 13 survive termination.</li>
            </ul>
          </div>

          {/* 12. Modifications to Terms */}
          <div>
            <h2>12. Modifications to Terms</h2>
            <p>
              CB360 reserves the right to modify these Terms at any time. For
              material changes, CB360 will provide at least 14 days&apos; prior
              notice by email to your registered address or via a Platform
              notification. Your continued use of the Platform after the
              effective date of the revised Terms constitutes your acceptance. If
              you do not agree to the revised Terms, you must notify CB360 in
              writing and cease use of the Platform before the effective date.
            </p>
          </div>

          {/* 13. Governing Law & Dispute Resolution */}
          <div>
            <h2>13. Governing Law &amp; Dispute Resolution</h2>

            <h3>13.1 Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the Kingdom of Bahrain, without regard to conflict of law
              principles.
            </p>

            <h3>13.2 Good-Faith Negotiation</h3>
            <p>
              In the event of a dispute arising out of or in connection with
              these Terms or the Platform, the parties agree to first attempt
              resolution through good-faith negotiation for a minimum of 30 days
              following written notice of the dispute.
            </p>

            <h3>13.3 Jurisdiction</h3>
            <p>
              If the dispute cannot be resolved through negotiation, both
              parties irrevocably submit to the exclusive jurisdiction of the
              competent courts of the Kingdom of Bahrain.
            </p>
          </div>

          {/* 14. General Provisions */}
          <div>
            <h2>14. General Provisions</h2>
            <ul>
              <li>
                <strong>Entire Agreement:</strong> These Terms, together with
                any Order Form, Service Agreement, or Data Processing Agreement,
                constitute the entire agreement between you and CB360 and
                supersede all prior representations or agreements.
              </li>
              <li>
                <strong>Severability:</strong> If any provision is held invalid
                or unenforceable, the remaining provisions continue in full
                force.
              </li>
              <li>
                <strong>Waiver:</strong> Failure by CB360 to enforce any right
                under these Terms does not constitute a waiver of that right.
              </li>
              <li>
                <strong>Assignment:</strong> You may not assign or transfer your
                rights or obligations under these Terms without CB360&apos;s
                prior written consent. CB360 may assign these Terms in
                connection with a merger, acquisition, or sale of substantially
                all its assets.
              </li>
              <li>
                <strong>Force Majeure:</strong> CB360 shall not be liable for
                failure or delay in performance caused by events beyond its
                reasonable control, including acts of God, government actions,
                Meta platform outages, Internet or telecommunications failures,
                or pandemics.
              </li>
              <li>
                <strong>Language:</strong> These Terms are drafted in English. In
                the event of any conflict or ambiguity, the English version
                prevails.
              </li>
            </ul>
          </div>

          {/* 15. Contact Information */}
          <div>
            <h2>15. Contact Information</h2>
            <p>
              For questions about these Terms, data protection matters, account
              enquiries, or support:
            </p>
            <address className='not-italic text-base'>
              <strong>CB360 | ConvoBot360</strong>
              <br />
              Powered by Silver Sparrow Trading W.L.L.
              <br />
              Registered Address: Shop 116, Bldg 18, Road 4101, Block 0341,
              Juffair, Kingdom of Bahrain
              <br />
              CR: CR No. 170940-1
              <br />
              Email:{' '}
              <a href='mailto:info@convobot360.com'>info@convobot360.com</a>
              <br />
              Telephone:{' '}
              <a href='tel:+97366907907'>+973 66907907</a>
              <br />
              Website:{' '}
              <a
                href='https://convobot360.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://convobot360.com
              </a>
            </address>
            <p className='text-sm text-gray-500'>
              CB360 is an authorised Meta Business Solution Provider for the
              WhatsApp Business API. Silver Sparrow Trading W.L.L. is not
              affiliated with, endorsed by, or an agent of Meta Platforms, Inc.
              or WhatsApp LLC. &quot;WhatsApp&quot; is a registered trademark of
              WhatsApp LLC. Use of the WhatsApp Business API is subject to
              Meta&apos;s own terms and policies.
            </p>
            <p className='text-sm text-gray-500'>
              &copy; 2026 Silver Sparrow Trading W.L.L. trading as CB360 |
              ConvoBot360. All rights reserved. &middot; Version 2.1 &middot;
              April 2026
            </p>
          </div>
        </article>
      </div>
    </MainLayout>
  );
};

export default TermsPage;
