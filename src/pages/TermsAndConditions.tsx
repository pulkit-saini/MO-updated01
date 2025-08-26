import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="page-top-spacing pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">
              Last modified on 01st Jan, 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border shadow-lg">
              <p className="text-lg leading-relaxed mb-6">
                Welcome to MangosOrange Group. When you visit, view, use, or access our website mangosorange.com and any applicable subdomains thereof, or any applications, mobile applications, functionalities, content, materials, or other online services provided by Mangosorange Group (collectively, the "Platform"), whether as a guest or a registered user, you are agreeing to the following terms and conditions ("Terms of Use"), so please take a few minutes to read over the Terms of Use below.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4">Acceptance of Terms of Use</h2>
              <p className="mb-6">
                If you do not agree to these Terms of Use, you are not permitted to use the Platform. Mangosorange Group can change these Terms of Use at any time without any notice to you. It is your responsibility to review these Terms of Use, as it creates a binding legal agreement between you and Mangosorange Group. If you use the Platform after we have changed any of the Terms of Use, you are agreeing to all of the changes. To the extent that you or your employer (to the extent you are using the Platform in your capacity as an agent of your employer) has entered into another written agreement with Mangosorange Group that contains terms that directly conflict with any terms of these Terms of Use, then the conflicted terms set forth in such other agreement will control.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4">Eligibility</h2>
              <p className="mb-6">
                Any access or use of the Platform by anyone under the age of 18 is prohibited. By agreeing to these Terms of Use, you represent and warrant that you are 18 years of age or older and have the legal capacity to enter into and abide by these Terms of Use.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4">Privacy</h2>
              <p className="mb-6">
                Any personal information submitted in connection with your use of the Platform is subject to our privacy policy found at http://mangosorange.com/privacy-policy/ (the "Privacy Policy"), which is hereby incorporated by this reference. We will use information about you that we obtain either directly from you or that we obtain through your use of the Platform in accordance with our Privacy Policy solely in furtherance of providing you and improving the Platform.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4">Account and Security</h2>
              <p className="mb-6">
                You may need to set up an account in order to use some of the features of the Platform. When you are setting up your account, you must give us accurate and complete information. This means that you cannot set up an account using a name or contact information that does not apply to you, and you must provide accurate and current information on all registration forms that are part of the Platform. By accessing any such account, you represent and warrant that you have been authorized to do so by Mangosorange Group and are doing so only using credentials that have been issued to you by Mangosorange Group. You may not use any account belonging to any other person without Mangosorange Group's express, prior, written permission. You have complete responsibility for your account and everything that happens on your account. This means you need to be careful with your password. If you find out that someone is using your account without your permission, you must let us know immediately. You may not transfer your account to someone else and doing so could subject you to civil or criminal liability. We are not liable for any damages or losses caused by someone using your account without your permission.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4">Proprietary Materials</h2>
              <p className="mb-6">
                The Platform contains copyrighted materials, trademarks, proprietary and confidential information, and intellectual property of Mangosorange Group and licensors of Mangosorange Group (collectively, "Proprietary Materials"), including without limitation source code, video, text, software, photos, graphics, images, music, and sound. You agree not to modify, publish, transmit, participate in the transfer or sale of, create derivative works of, or in any way exploit, in whole or in part, any Proprietary Materials. Proprietary Materials may only be accessed through the Platform, and not by or from any other site or means. The right of access to the Platform does not grant to you any right to download or store any Proprietary Materials in any medium.
              </p>

              <p className="mb-6">
                Mangosorange Group reserves all intellectual property rights to the Proprietary Materials, other than as specifically granted under the applicable license granted you under these Terms of Use. No posting, copying, transmission, retransmission, distribution, redistribution, publication, republication, de-compilation, disassembling, reverse engineering, or otherwise reproducing, storing, transmitting, modifying, or commercially exploiting any Proprietary Materials in any form or by any means, for any purpose, is permitted without our express written permission.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4">User Generated Content</h2>
              <p className="mb-6">
                In these Terms of Use, "User Generated Content" means material (including without limitation text, images, audio material, video material, and audio-visual material) that you submit to the Platform, for whatever purpose.
              </p>

              <p className="mb-6">
                You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, communicate, publicly perform, publicly display, and distribute your User Generated Content. You also grant to us the right to sub-license these rights, and the right to bring an action for infringement of these rights. The rights you grant in this license are for the limited purpose of operating, promoting, and improving the Platform.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4">Acceptable Use</h2>
              <p className="mb-4 font-semibold">You must not:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Use the Platform in any way that causes, could be reasonably expected to cause, or is intended to cause damage to the Platform or impairment of the availability or accessibility of the Platform; or in any way which is unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
                <li>Use the Platform to copy, store, host, transmit, send, use, publish, or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit, or other malicious computer software.</li>
                <li>Conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction, and data harvesting) on or in relation to our Platform without our express written consent.</li>
                <li>Republish material from the Platform (including republication on another website)</li>
                <li>Sell, rent, or sub-license material from the Platform</li>
                <li>Reproduce, duplicate, copy, or otherwise exploit material on our Platform for a commercial purpose</li>
                <li>Develop, support, or use software, devices, scripts, robots, or any other means or processes (including crawlers, browser plugins and add-ons or any other technology) to scrape the Platform or otherwise copy profiles and other data from the Platform.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-4">Warranty Disclaimer</h2>
              <p className="mb-6 font-semibold">
                We Do Not Warrant the Completeness or Accuracy Of The Information Published On The Platform; Nor Do We Commit To Ensuring That The Platform Remains Available Or That The Material On The Platform Is Kept Up-To-Date
              </p>

              <p className="mb-6">
                Use Of the Platform Is at Your Own Risk. The Platform Is Provided on A "As Is" And "As Available" Basis. Mangosorange Group and Its Affiliates, Suppliers and Partners Expressly Disclaim All Warranties of Any Kind, Whether Express Or Implied, Including, But Not Limited To, The Implied Warranties Of Title, Merchantability, Fitness For A Particular Purpose And Non-Infringement.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
              <p className="mb-6">
                To the fullest extent permitted under law, Mangosorange Group and its affiliates, suppliers and partners have no obligation or liability (whether arising in contract, warranty, tort (including negligence), product liability or otherwise) for any indirect, incidental, special, punitive, or consequential damages or liabilities (including, but not limited to, any loss of data, revenue or profit) arising from or related to your use of the platform or any content provided by or through the platform, even if we have been advised of the possibility of such damages in advance. Some states do not allow the limitation or exclusion of incidental, consequential or other types of damages, so some of the above limitations may not apply to you. Notwithstanding anything to the contrary contained herein, Mangosorange Group's liability and the liability of each of its officers, directors, investors, employees, agents, advertisers, licensors, suppliers, service providers and other contractors to you or any third parties under any circumstance is limited to a maximum amount of $100.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
              <p className="mb-2">
                <strong>Email:</strong> <a href="mailto:info@mangosorange.co.in" className="text-primary hover:underline">info@mangosorange.co.in</a>
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> <a href="tel:+911204164821" className="text-primary hover:underline">+91 120 416 4821</a>
              </p>
              <p className="mb-6">
                <strong>Address:</strong> B-47, 3rd Floor, Sector-64, Noida, 201 301
              </p>

              <p className="text-sm text-muted-foreground mt-8">
                For more information, please visit our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TermsAndConditions;