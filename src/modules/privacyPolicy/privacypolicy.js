import React from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import Share from "../common/share";

export default function Privacypolicy() {
  return (
    <>
      <Header />
      <nav className='widgets-social'>
      <ul>
        <li><a href="#"><p className='m-0 fs-18-px'>60 </p><p className='fs-11-px'>shares</p></a></li>
        <li><a href="#"><i className="fab fa-facebook-f"></i><span>Share</span></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i><span>Share</span></a></li>
        <li><a href="#"><i className="fab fa-linkedin-in"></i><span>Share</span></a></li>
        <li><a href="#"><i className="fab fa-whatsapp"></i><span>Share</span></a></li>
        <li><a href="#"><i className="fab fa-solid fa-share-nodes"></i><span>Share</span></a></li>

      </ul>
    </nav>
      <div className="main-area pt-5 main-component bg-white">
        <div className="container">
          <div className="row div-area">
            <div>
              <h2>
                <strong>Review Policy</strong>
              </h2>
              <p>
                Scortik is a developer’s roadmap for web3 ecosystem protocols,
                tools and technologies that provides an objective landscape for
                evaluating and analyzing their technical components and
                measurements. From core aspects like write speed, read speed,
                and gas fee to extended developer support analysis and GitHub
                engagement, Scortik covers everything and offers a 360-degree
                overview of a protocol’s developer ecosystem.
              </p>
              <p>
                Scortik is a community initiative envisioned by leaders in
                blockchain development to help businesses and web3 developers
                navigate the crowded decentralized space and identify the most
                suitable blockchain platform for their development needs.
              </p>
              <br/>
              <h2>
                <strong>Need for Scortik audits</strong>
              </h2>
              <p>Most existing blockchain review platforms focus on security audits or price tracking of cryptocurrencies. The lack of a neutral, third-party blockchain developer ecosystem evaluation and verification system has hindered the demanding needs of web3 developers. Scale-ups, enterprises, and even startups of web3 developers need a comprehensive in-depth technical analysis of blockchain protocols to assess their suitability for development. The web3 space, being decentralized and anonymous, makes it harder for developers to make choices. Scortik stands to resolve this problem by presenting real-time protocol data based on reliable, referenceable, and measurable technical metrics.</p>
              <h2>
                <strong>Fundamentals of Scortik</strong>
              </h2>
              <p>Scortik platform functions elaborately to provide Web 3.0 developers with elaborate scoring and rating of various parameters in protocols.</p>
              <p>It has two fundamental sections:</p>
              <h4><strong>Dashboard</strong></h4>
              <p>Scortik dashboard consists of various segments from which the developers request a protocol review, can contact the Scortik team and can get a brief about Scortik.</p>
            </div>
            <div className="mb-2-per">
                <span className="privacy-image">
                    <img src="https://scortik.com/wp-content/uploads/2022/07/scortik-dashboard.png" className="img-priv"/>
                </span>
            </div>
            <div className="mb-2-per">
            <p>It lets developers check the alerts for different upgrades required on the various protocols, check the rating of the popular protocols and newly added blockchains, access the protocol search bar, check the different ecosystem scores and ranks, and display live monitoring of certain parameters in a blockchain protocol.</p>
                <p></p>
                <h4><strong>Get Listed</strong></h4>
                <p>Web3 developers can get their choice of protocol listed on Scortik by going to the Get Listed section of the platform. They need to initiate a request to review the protocol by clicking on the ‘Request Protocol Review’ and then have to click on the submit button. After the request, the protocol will be analyzed and evaluated depending on the 8 rating parameters. The protocol will then be listed on the Scortik platform.</p>
                <p>Scortik has 33 protocols listed on it, and as the Scortik community spreads its auditing, it will add more protocols to the platform.<br/>
&nbsp;</p>
<h2><strong>What are the various parts of the Scortik dashboard and how do they work?</strong></h2>
<p>The Scortik dashboard has a dynamic mechanism and serves various purposes:</p>
<h4><strong>Alerts</strong></h4>
<p>The ‘Alerts’ section on the dashboard gives constant notifications to reflect the upgrade points or improvements in the various protocols. For example, if NEAR has not updated the IOS SDK in its ecosystem, Scortik will reflect the IOS SDK missing in the ‘Alert’ section.</p>
            </div>
            <div className="mb-2-per text-center">
                <span className="privacy-image">
                    <img src="https://scortik.com/wp-content/uploads/2022/07/alert.png" className="img-priv"/>
                </span>
            </div>
            <h4><strong>Popular Protocols</strong></h4>
<p>Scortik reflects all the well-known blockchain protocols and rates them on the Scortik dashboard based on their popularity within the web3 space.</p>
            <div className="mb-2-per text-center">
                <span className="privacy-image">
                    <img src="https://scortik.com/wp-content/uploads/2022/07/popular-protocol.png" className="img-priv"/>
                </span>
            </div>
            <div className="mb-2-per">
            <h4><strong>Recently Added</strong></h4>
<p>All the crypto-assets and protocols that have been added recently go through an in-depth analysis to get themselves listed on the Scortik dashboard.</p>
            </div>
            <div className="mb-2-per text-center">
                <span className="privacy-image">
                    <img src="https://scortik.com/wp-content/uploads/2022/07/recently-added.png" className="img-priv"/>
                </span>
            </div>
            <div className="mb-2-per">
            <h4><strong>Protocol Score Table</strong></h4>
<p>This score table reflects all the blockchain protocols listed on Scortik, their ecosystem score, transactions per second, public nodes and the feasibility of each protocol’s grant. This table also has a search bar to filter out different protocols.</p>
            </div>
            <div className="mb-2-per text-center">
                <span className="privacy-image">
                    <img src="https://scortik.com/wp-content/uploads/2022/07/protocol-score-table.png" className="img-priv"/>
                </span>
            </div>
            <div className="mb-2-per">
            <h4><strong>Live Monitoring</strong></h4>
<p>The live monitoring section displays the live updates of the various listed protocols, for instance, the uptime percentage of Polkadot or the current gas fee of any listed protocol.</p>
            </div>
            <div className="mb-2-per text-center">
                <span className="privacy-image">
                    <img src="https://scortik.com/wp-content/uploads/2022/07/live-monitoring.png" className="img-priv"/>
                </span>
            </div>
            <div className="mb-2-per">
            <div>
            <h4><strong>On what parameters does the Scortik score table work?</strong></h4>
<p>There are eight main parameters or the main Scortik audit areas based on which Scortik scores the blockchain networks as given below:</p>
            <ul style={{listStyle:"disc",paddingLeft:"20px"}}>
<li>
<h4><strong>Ecosystem</strong></h4>
<p>The ecosystem score shows the reliability of the blockchain network based on the network’s collective reviewing and continuous monitoring.</p>
</li>
<li>
<h4><strong>Performance</strong></h4>
<p>Performance score determines the level of blockchain performance based on benchmarks such as average TPS, gas fees, nodes and network uptime.</p>
</li>
<li>
<h4><strong>Grant Program</strong></h4>
<p>This parameter evaluates the efficiency of a blockchain ecosystem based on funds allocated to different developers who aspire to develop their blockchain networks.</p>
</li>
<li>
<h4><strong>Foundation Tools</strong></h4>
<p>This parameter reflects the blockchain’s development feasibility using the tools and different resources it provides to the developers.</p>
</li>
<li>
<h4><strong>Documentation</strong></h4>
<p>This will score the various parameters like Skeleton Code or the API documentation to evaluate if a particular protocol helps developers analyze the protocol ecosystem better.</p>
</li>
<li>
<h4><strong>Add-Ons</strong></h4>
<p>Add-Ons reflect if a protocol is efficiently equipped with all the appropriate add-on tools like the IDEs, security auditing tools and code editors.</p>
</li>
<li>
<h4><strong>Developer Community</strong></h4>
<p>It signifies the efficiency of a protocol’s interaction with its online community via different social media platforms like Slack, Discord, Telegram etc.</p>
</li>
<li>
<h4><strong>Third-Party Services</strong></h4>
<p>Third-party services reflect the potential of a protocol in offering third-party services like oracle integration, cloud services and API management.</p>
</li>
</ul>
<p>Along with all the eight parameters given above, Scortik also has the feature of ‘Review Notes.’ Review Notes are an in-depth analysis of the various protocols mentioning their points of improvement and specialties. These notes help developers comprehend why a blockchain ecosystem score is favorable or unfavorable.</p>
<p>&nbsp;</p>
<h2><strong>Disclaimer</strong></h2>
<h4><strong>No Investment Advice</strong></h4>
<p>The information provided on this website does not constitute investment, financial, trading, or other miscellaneous advice. You should not treat any of the website’s content as such. Scortik does not recommend that any cryptocurrency should be bought, sold, or held by you. Do your due diligence and consult your financial advisor before making investment decisions.</p>
<h4><strong>Accuracy of Information</strong></h4>
<p>While Scortik will make an effort to ensure the authenticity of the information on this website, it disclaims all liability for any incomplete or inaccurate information. All information is provided by Scortik “as is.” You are aware that using any and all of the information on this site is at your own risk. You alone are responsible for deciding whether to utilize or rely on our content and services.</p>
<h4><strong>Non Endorsement</strong></h4>
<p>All content provided herein on our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms on Scortik’s website does not constitute an endorsement, guarantee, warranty, or recommendation by Scortik. Do conduct your due diligence before deciding to use any third-party services. No content on our site is meant to be a solicitation or offer.</p>
<p>&nbsp;</p>
<h2><strong>Report Vulnerabilities</strong></h2>
<p>Please do not discuss any vulnerabilities, including resolved ones, outside the program without the Scortik team’s written consent. Reach out to <span> </span><a href="mailto:feedback@scortik.com" title="mailto:feedback@scortik.com" data-renderer-mark="true" className="css-tgpl01">feedback@scortik.com</a> to report an issue or for general inquiries.</p>
<p>&nbsp;</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Share/>
    </>
  );
}
