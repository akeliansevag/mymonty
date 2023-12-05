import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import Section from '../components/Section';
import styles from './page.module.css';

export const metadata = {
    title: websiteName + 'Privacy Policy',
    description: '',
};

const terms = () => {
    const data = {
        title: 'our Policy at Mymonty',
        subtitle: 'Privacy Policy',
        desc: 'Continuous Development: At MyMonty, we are dedicated to nurturing the professional',
        image: false,
        cta: {
            type: 'sfsfsdf',
            button: {
                name: 'Download app'
            }
        }
    };
    return (
        <div className={styles.privacyPolicy}>
            <Banner data={data} />
            <Section>
                <div className='container'>
                    <p><strong>Privacy Policy</strong><br />
                        This policy (together with our Website Terms and Conditions) sets out the basis on which any personal information we collect from you, or that you provide us with, will be processed by us.<br />
                        This Privacy Policy applies to information we collect when you access or use our products and services (such as our websites, devices, mobile applications, and online services), or when you otherwise interact with us.<br />
                        Please read the following carefully to understand our views and practices regarding your personal information and how we will treat it. By visiting the Website, you are accepting and consenting to the practices described in this policy.<br />
                        Our Website may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.<br />
                        Information we may collect from you<br />
                        You may be asked to provide your personal information anytime you use our Website or Service.<br />
                        We process personal data about you as necessary to meet our contractual and legal obligations, provide you with products and services that you request from us or otherwise fulfill the legitimate interests described in the sections below.<br />
                        We may collect and process the following data about you:<br />
                        Information you give us: You may give us information about you by filling in forms on our Website or by corresponding with us by phone, e-mail or otherwise. The information you give us includes your name and e-mail address.<br />
                        Information we collect about you: With regard to each of your visits to our Website we will automatically collect the following information: Technical information, including theInternet protocol (IP) address used to connect your computer to the Internet, your login information (if applicable), browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, information about your visit, including the full Uniform Resource Locators (URL), clickstream to, through and from our Website (including date and time), information you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouseovers), methods used to browse away from the page and any information of yours related to contacting our customer service team (e.g. phone number).<br />
                        Information we receive from other sources: This is information we receive about you from public domain, third parties or other websites we operate or the other services we provide. Third parties we work with include: business partners, sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers and credit reference agencies.<br />
                        Uses made of the information<br />
                        We use information held about you in the following ways:</p>

                    <ul>
                        <li>To carry out our obligations to provide you with the information, products and services that you request from us;</li>
                        <li>To provide you, or permit selected third parties to provide you, with information about other goods and services we offer that are similar to those that you have already enquired or purchased;</li>
                        <li>To communicate with you, directly or through one of our partners, including for customer support, to respond to your requests and for assistance and customer service, to provide you with updates and other information relating to the Service;</li>
                        <li>To provide you, or permit selected third parties to provide you, with information about goods or services we feel may interest you;</li>
                        <li>To notify you about changes to our goods and service;</li>
                        <li>To ensure that content from our Website is presented in the most effective manner for you and for your computer.</li>
                        <li>For compliance purposes, including enforcing our Terms, or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency.</li>
                        <li>To administer our Website and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes</li>
                        <li>To improve our Website to ensure that content is presented in the most effective manner for your and for your computer;</li>
                        <li>To allow you to participate in interactive features of our Service, when you choose to do so;</li>
                        <li>As part of our efforts to keep our Website safe and secure;</li>
                        <li>To measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you;</li>
                        <li>To make suggestions and recommendations to you and other users of our Website about goods or services that may interest you or them.</li>
                    </ul>

                    <p>We do not:</p>

                    <ul>
                        <li>Sell or trade your personal data;</li>
                        <li>Transfer your personal data to a third country or international organization;</li>
                        <li>Take a decision based solely on automated processing, including profiling.</li>
                    </ul>

                    <p>Disclosure of your information<br />
                        We may share your personal information with:</p>

                    <ul>
                        <li>Any member of our group, including but not limited to our subsidiaries, affiliates, sister companies&hellip;</li>
                        <li>Selected third parties including but not limited to:</li>
                        <li>Business partners, suppliers and sub-contractors for the performance of any contract we enter into with them or you;</li>
                        <li>Analytics and search engine providers that assist us in the improvement and optimization of our Website;</li>
                        <li>Vendors and service providers for promotional or marketing purposes, and to provide you with information relevant to you such as product announcements, software updates, special offers, or other information.</li>
                        <li>Fraud and crime prevention agencies for the purpose of assessing the risk of crime, fraud and money laundering.</li>
                        <li>We will disclose your personal information to third parties:</li>
                        <li>If we are under a duty to disclose or share your personal information in order to comply with any legal obligation, or in order to enforce or apply our Website Terms and Conditions; or to protect the rights, property, or safety of us, our customers, or others.</li>
                        <li>In the event that we sell or buy any business or assets, in which case we will disclose your personal information to the prospective seller or buyer of such business or assets.</li>
                        <li>If the Company, or substantially all of its assets are acquired by a third party, in which case personal information held by it about its customers will be one of the transferred assets.</li>
                    </ul>

                    <p>Children Privacy<br />
                        We do not knowingly collect or maintain personal data on our Website from persons under (13) thirteen years of age, and no part of our Website is directed to persons under (13) thirteen years of age. If you are under (13) thirteen years of age, then please do not use or access this Website at any time or in any manner.<br />
                        We will take appropriate steps to delete any personal data of persons less than (13) thirteen years of age that has been collected on our Website without verified parental consent upon learning of the existence of such personal data.<br />
                        Length of Storage of Your Information<br />
                        We store the information we collect about you for as long as is necessary for the purposes for which we originally collected it, unless a longer retention period is required or permitted by applicable law.<br />
                        Security<br />
                        We regularly monitor our systems for possible weaknesses and attacks. The technologies we use are designed to provide a level of security appropriate to the risk of processing your personal information. We have proven many times that your data is safe with us.<br />
                        Unfortunately, the transmission of information via the Internet is not completely secure. Although we will do our best to protect your personal information, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access. We can only guarantee that we will do our best to keep your data safe.<br />
                        Your Rights</p>

                    <ul>
                        <li>Right to access and your personal data. You have the right to obtain from usconfirmation as to whether or not personal data concerning you are being processed, and, where that is the case, access to the personal data.</li>
                        <li>Right to rectification. You have the right to obtain from us the rectification of inaccurate personal data. Taking into account the purposes of the processing, you also shall have the right to have incomplete personal data completed.</li>
                        <li>The accuracy of the personal data is contested by you, for a period enabling us to verify the accuracy of the personal data;</li>
                        <li>The processing is unlawful, and you oppose the erasure of the personal data and request the restriction of their use instead;</li>
                        <li>We no longer need the personal data for the purposes of the processing, but they are required by you for the establishment, exercise or defense of legal claims;</li>
                        <li>You have filed a claim to processing data, pending the verification whether ourlegitimate grounds override yours.</li>
                        <li>Right to take your data. You can ask us for a copy of your personal data and can ask for a copy of personal data you provided in machine readable form.</li>
                        <li>Right to delete data. You can ask us to erase or delete all or some of your personal data where one of the following grounds applies:</li>
                        <li>The personal data is no longer necessary in relation to the purposes for which it was collected or otherwise processed;</li>
                        <li>There is no legal ground for the processing;</li>
                        <li>Personal data has to be erased for compliance with a legal obligation in law to which we are subject;</li>
                        <li>The personal data has been collected in relation to the offer of information society services.</li>
                        <li>Right to lodge a complaint. You have a right to lodge a complaint with the supervisory authority of the country in which you reside.</li>
                    </ul>

                    <p>Changes to our Privacy Policy<br />
                        Any changes we make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy.</p>

                </div>


            </Section>
        </div>
    )
}

export default terms;
