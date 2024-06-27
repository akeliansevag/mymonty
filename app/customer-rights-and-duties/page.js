import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import termsImage from '@/public/personal/terms-and-conditions.webp';
import SmallBanner from '../components/SmallBanner';

export const metadata = {
    title: websiteName + 'Customer Rights & Duties',
    description: ''
};

const terms = () => {

    const htmlData = "<h2>Your Rights</h2><ol><li>To review the terms, conditions, and details of the product or service, and to seek thorough explanations, ensuring a clear understanding and the ability to comply.    <li>To obtain a clear, comprehensive, and simplified explanation about the financial services and products with different risk levels.<li>To obtain a professional and clear answer to any question concerning an ambiguous clause or condition. <li>To request to read and obtain in advance a copy of each document and text referred to in any contract to be signed with us.<li>To obtain and retain a copy of the contracts and documents signed, without bearing any additional cost.<li>To ask us to determine the actual cost of the product or service, including the computational method of the lending interest rate.<li>To obtain any product or service, provided it is suitable with your request, profile and perception of the likely financial risks associated to the product or service.<li>To check the related transactions you make regarding each product or service. <li>To obtain, for each product or service, a periodic detailed statement of account.<li>To refuse to sign a blank or incomplete form and make sure all the required fields and figures in the form to be signed are correct and complete.  <li>To submit a complaint about any service or product, and request from us an explanation on the complaint submission procedure, the time limit needed to be notified of the complaint outcome, and the mechanism applied to submit the complaint to other authorities whenever you are not convinced of the complaint’s outcome.  </ol><h2> </h2><h2>Your Duties  </h2><ol><li>Provide true, complete, and accurate information when filling out any form provided by us, and refrain from providing any false information.<li>Disclose all financial obligations when applying for a product or service, without prejudice to the rights conferred to you by the Banking Secrecy Law. <li>Update your personal information submitted to us on a continuous basis and whenever required to do so. <li>Comply with the terms and conditions governing the service or product you have selected.  <li>Promptly notify us of any unknown operation on your account.<li>Provide us with all required information during onboarding and thereafter and report any change in this information to enable us to contact you personally and thus guarantee the privacy of information.</ol><h2> </h2><h2>Our Instructions to You</h2><ol><li>Do not provide any other party, under any circumstances, with any details about your account or any other financial or critical personal information. <li>Whenever facing financial difficulties preventing you from meeting your obligations or paying your installments in due time, refer to us to find out the best options, including the rescheduling of obligations.<li>Be careful when granting a proxy to or authorizing a third party to complete your financial transactions, by clearly determining the powers delegated under the proxy or authorization.</ol>";

    return (
        <div className={styles.terms}>
            <SmallBanner title="Customer Rights & Duties" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content' dangerouslySetInnerHTML={{ __html: htmlData }} />
            </div>

        </div>
    )
}

export default terms;
