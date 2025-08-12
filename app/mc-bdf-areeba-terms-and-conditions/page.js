import React from 'react';
import { websiteName } from '@/app/config';
import termsImage from '@/public/personal/terms-and-conditions.webp';
import FooterBanner from '../components/FooterBanner';

export const metadata = {
    title: 'BC X BDF X Areeba Terms and Conditions' + websiteName,
    description: 'Understand MyMonty\'s full terms & conditions for digital banking services in Lebanon. Get clarity on our policies & legal agreements. Learn more.'
};

const terms = () => {
    const htmlData = '<div><h2>Mastercard x Beirut Duty Free x Areeba Campaign</h2><p><strong>Campaign period:</strong> July 15 – August 15, 2025</p><p><strong>Eligible cardholders:</strong> All consumer Mastercard card types and tiers, issued anywhere in the world.</p><p><strong>Mechanics:</strong> Shop with your Mastercard at Beirut Duty Free shops for a minimum amount of USD 100 and get an instant voucher of USD 10 to be redeemed in any Beirut Duty Free shop except on Cigars and Electronics.</p><ul><li>Transactions must be completed in USD.</li><li>There is no daily cap on the number of vouchers a customer can receive. However, only one voucher will be issued per qualifying transaction, regardless of the transaction amount.</li><li>Vouchers must be physically presented at the time of redemption purchase.</li><li>Only one (1) voucher can be redeemed per purchase.</li><li>This Promotion is valid for in-store purchases only and vouchers can only be redeemed in-store at Beirut Duty Free shops, except on Cigars and Electronics.</li><li>Partially redeemed vouchers cannot be refunded or credited; any unused balance will be forfeited.</li><li>Voucher validity: 3 months from issuance.</li><li>Reverse and split transactions are not eligible.</li><li>Promotion is valid until the vouchers are depleted.</li><li>Mastercard and BDF are not responsible for lost, stolen, or unredeemed vouchers once issued.</li><li>Mastercard and BDF reserve the right to change the terms and conditions of the voucher at any time.</li><li>Link to full terms & conditions: <a href="https://www.beirutdutyfree.com/mc-terms-and-conditions" target="_blank">dutyfree Terms and Conditions</a></li></ul></div>';

    return (
        <div>
        
            <FooterBanner downloadURL="/BC X BDF X Areeba Terms and Conditions.pdf" title="BC X BDF X Areeba Terms and Conditions" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content' dangerouslySetInnerHTML={{ __html: htmlData }} />
            </div>

        </div>
    )
}

export default terms;
