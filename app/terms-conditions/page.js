import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import Section from '../components/Section';
import styles from './page.module.css';

export const metadata = {
    title: websiteName + 'Terms & Conditions',
    description: '',
};

const terms = () => {
    const data = {
        title: 'our terms and conditions',
        subtitle: 'Terms and Conditions',
        desc: 'Continuous Development: At MyMonty, we are dedicated to nurturing the professional',
        image: false,
        cta: {
            type: 'button',
            button: {
                name: 'Download app'
            }
        }
    };
    return (
        <div className={styles.terms}>
            <Banner data={data} />
            <Section>
                <div className='container'>
                    <p><strong>Terms and Conditions</strong><br />
                        Welcome to our Website. These Terms and Conditions (Terms of Use or Terms) apply to the MyMonty website located at [Insert link], and all associated sites linked to [Insert link] by MyMonty (hereinafter referred to as &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;).<br />
                        You wish to use our services provided on this Website and we are willing to make the services available to you subject to these Terms.<br />
                        If you continue to browse and use this Website, you agree to comply with and be bound by the following Terms and Conditions, which together with our Privacy Policy govern our relationship with you in relation to this website.<br />
                        We reserve the right, at our sole discretion, to change, modify, add or remove portions of these Terms, at any time. It is your responsibility to check these Terms periodically for changes. Your continued use of the Website following the posting of changes will mean that you accept and agree to the changes made. As long as you comply with these Terms, we grant you a personal, non-exclusive, non-transferable, revocable license to access and use the Website strictly in accordance with these Terms.<br />
                        <br />
                        Intellectual Property Rights<br />
                        We retain all right, title and interest in all of our intellectual property, including but not limited to inventions, discoveries, processes, marks, methods, compositions, formulae, techniques, all of our brand names, graphics, user interface design, text, logos, images information and data, whether or not patentable, copyrightable or protectable in trademark, and any trademarks, copyrights or patents based thereon. You shall not use any of our Intellectual Property for any reason, except with our express, prior, written consent.<br />
                        These Terms shall not be understood and interpreted in a way that they would mean assignment of intellectual property rights, unless it is explicitly defined so in these Terms.<br />
                        You must not use or exploit content from our Website for any commercial and non-private purpose without our prior written consent.<br />
                        As a condition of your use of the Website you warrant to us that you will not use the Website for any purpose that is unlawful or prohibited by these Terms. You must not use the Website in any manner that could damage, disable, overburden, or impair the Website or interfere with any other party&#39;s use and enjoyment of the Website. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Website.<br />
                        All content included on the Website and associated products and services, such as, but not limited to, text, graphics, logos, images, source code, as well as the compilation thereof, and any software used on the Website is our property and protected by copyright, trademark and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.<br />
                        You will not copy, duplicate, reproduce, modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any material, in whole or in part, found on our Website or associated products and services.<br />
                        Our Intellectual Property is not for resale. Your use of our Intellectual Property does not entitle you to make any unauthorized use of any of our Intellectual Property.<br />
                        Access To Website<br />
                        Our Website is provided to you without warranty of any kind, either express or implied. We do not represent that the Website will be available 100% of the time to meet your needs. In case of interruptions, we take all reasonable actions to provide you with access to our Website as soon as possible, but there are no guarantees that access will not be interrupted, or that there will be no delays, failures, errors, omissions or loss of transmitted information.<br />
                        We may suspend the use of the Website for maintenance purposes. We reserve the right, in oursole discretion, to terminate your access to the Website and its related services or any portion thereof at any time, without notice, in particular due to legal grounds originating in anti-money laundering and KYC regulation and procedures, or any other relevant applicable regulation.<br />
                        We reserve the right to remove or modify any Service or material we provide on the Website, in our sole discretion without notice. We will not be accountable if for any reason all or any part of the Website is unavailable at any time or for any period. From time to time, we may restrict access to users to some parts of the Website.<br />
                        We will not be accountable for any loss or damage if the Website is unavailable or suspended. You are responsible for making all provisions necessary for you to have access to the Website.<br />
                        <br />
                        In order to access the Website, you must meet the following conditions:</p>

                    <ul>
                        <li>
                            You are at least 18 years old.</li>
                        <li>
                            You have not previously been suspended or removed from using our Website.</li>
                        <li>
                            You have full power and authority to enter into this agreement and in doing so will not violate any other agreement to which you are a party.</li>
                        <li>
                            You will not use our services if any applicable laws in your country prohibit you from doing so in accordance with the Terms.</li>
                        <li>
                            You guarantee that you will not be using the Website for any illegal activities, including money laundering and the financing of terrorism.</li>
                        <li>
                            You did not provide false, inaccurate, or misleading information.</li>
                        <li>
                            You will not encourage or induce any third party to engage in any of the activities prohibited under this Section.</li>
                    </ul>

                    <p>Subscription<br />
                        In order to access our services, you must subscribe to our Website.<br />
                        You hereby agree and confirm that all information provided in connection with subscription is accurate, complete, and up-to-date and will always stay that way.<br />
                        Your credentials must always be kept confidential. For security reasons, reset your login password regularly.<br />
                        Communications<br />
                        By subscribing to our Website, you agree to receive all digital communications, agreements, documents, notices, and disclosure (&ldquo;Communications&rdquo;), that we deliver to you in relation to your subscription and use of the Website. You agree that we may provide these Communications to you by posting them on the Website or by emailing them to you at the email address you provided on your subscription.<br />
                        You may revoke your consent to receive digital Communications by sending a withdrawal notice to our support email [Insert email].<br />
                        Third Party materials<br />
                        When using our Website, you will see materials provided by third parties, including articles, reviews, comments, insights, analysis, and links to web pages of such parties, including but not limited to blogs, forums, links to other sites, communities and social networks (&ldquo;Third Party Materials&rdquo;) We do not control or endorse any Third-Party Materials and shall take no responsibility for Third Party Materials, including content that may be misleading, incomplete, erroneous, offensive, indecent or otherwise objectionable. We do not endorse content of Third-Party Material. We are not responsible nor accountable for any loss or damage of any sort sustained as the result of any such dealings, and you understand that your use of Third-PartyMaterials, and your interactions with third parties that are linked to our Service, is at your own risk.<br />
                        No Warranties<br />
                        This Website is provided &quot;as is,&quot; with all faults, and we make no express or implied representations or warranties, of any kind related to this Website or the materials available on it.Additionally, nothing contained on this Website shall be construed as providing consultation or advice to you.<br />
                        To the fullest extent permitted by applicable laws, we disclaim all representations, warranties, and conditions relating to our Website and its use.<br />
                        Privacy<br />
                        Our Privacy Policy applies to the use of this Website, and its terms are made a part of these Terms of Use by this reference. To view our Privacy Policy, click on [Insert link]. Additionally, by using the Website, you acknowledge and agree that Internet transmissions are never completely private or secure.<br />
                        Limitation Of Liability<br />
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOOD-WILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (i) YOUR USE OF THE INABILITY TO USE THE SERVICES; (ii) THE COST OF PROCUREMENT OF SUBSTITUTE SERVICES RESULTING FROM ANY DATA, INFORMATION, CONTENT AND/OR ANY OTHER SERVICES OBTAINED THROUGH OUR WEBSITE; (iii) THE UNAUTHORIZED ACCESS TO, OR ALTERATION OF YOUR REGISTRATION DATA AND/OR VERIFIED PROFILE; AND (iv) ANY OTHER MATTER RELATING TO THE WEBSITE AND/OR THE SERVICES OFFERED ON THE WEBSITE.<br />
                        THE LIMITATIONS OF THIS SUBSECTION SHALL APPLY TO ANY THEORY OF LIABILITY, WHETHER BASED ON WARRANTY, CONTRACT, STATUTE, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF ANY SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.<br />
                        Indemnification<br />
                        You agree to indemnify and hold us, our officers, directors, shareholders, predecessors, successors in interest, employees, agents, subsidiaries and affiliates harmless from any demand, loss, liability, claim or expense (including attorney&rsquo;s fees) made against you by any third party due to, arising out or in connection with your use of our Website or our services.<br />
                        You acknowledge that you will be solely responsible for any legal liability arising out of or relating to the Service (whether transmitted on your own or on any Third Party&rsquo;s behalf).<br />
                        Subject to any express provision to the contrary in these terms, we will not in any circumstances be liable to you in contract, tort negligence or otherwise for any economic loss (including but not limited to, any loss or profit, business, contracts, revenue, turnover, or anticipated savings) or for any indirect or consequential losses, whether or not they were foreseen or foreseeable.<br />
                        You shall be responsible for explaining and answering any complaint that we receive from any relevant regulatory body resulting from your use of the Service. We will forward any complaint to you as soon as it is reasonably possible. You must follow the applicable complaint procedures, respond to each complaint within the timeframes specified by the relevant regulatory body and must forward a copy of your response to us immediately. You will be liable for any fines and/or penalties imposed by any regulatory body against you or us or any of our associated companies, due to your contravention of these Terms.<br />
                        Severability<br />
                        If any term or other provision of these Terms is found to be unenforceable, illegal or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein which shall remain in full force and effect.<br />
                        Assignment<br />
                        We shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.<br />
                        Entire Agreement<br />
                        These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between you and us in relation to your use of this Website, and supersede all prior agreements and understandings with respect to the same.<br />
                        Governing Law, Dispute Resolution<br />
                        These Terms will be governed by and construed in accordance with the laws of the Republic of Lebanon.<br />
                        Prior to filing any claim against us, you undertake to file such claim or request directly to us via e-mail at [Insert email]. You agree that you will not file any claim earlier than (30) thirty days after sending such claim or request to us.<br />
                        All disputes or claims arising out of or in connection with these Terms including disputes relating to its validity, breach, termination or nullity, and any disputes or claims arising out of or in connection with the use of Website shall be finally and exclusively settled in the courts of Beirut.<br />
                        Support<br />
                        Questions, comments, and concerns regarding these terms are welcomed and should be addressed to: [Insert link]</p>

                </div>


            </Section>
        </div>
    )
}

export default terms;
