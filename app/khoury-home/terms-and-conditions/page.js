import React from 'react';
import { websiteName } from '@/app/config';
import FooterBanner from '../../components/FooterBanner';

export const metadata = {
    title: websiteName + 'Terms & Conditions',
    description: ''
};

const khterms = () => {
    return (
        <div>
            <FooterBanner subtitle="Terms and Conditions" title="MYMONTY x KHOURY HOME DISCOUNTS PROMOTION" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content'>
                    <h2>What is this promotion about?</h2>

                    <p>Monty Finance S.A.L. is offering its personal customers who have successfully onboarded to MyMonty application (the “<strong>MyMonty Customers</strong>”) the opportunity to benefit from the MyMonty x Khoury Home Discounts Promotion (the “<strong>Promotion”</strong>). <br />
                    The Promotion runs from 10 AM on December 7, 2024 to 7 PM on December 31, 2024 (the “<strong>Promotion Period</strong>”). <br />
                    The Promotion allows exclusive discounts (the “<strong>Discounts”</strong>) for all MyMonty Customers on products purchased at Khoury Home and La Maison Khoury Home points of sale (“<strong>KH POS</strong>”) in all the Lebanese territory. The Promotion applies for purchases made in LBP and USD. <br /> 
                    These Promotion terms and conditions (the “<strong>Promotion Terms</strong>”) outline the rules that govern this Promotion. By taking part in this Promotion, you agree to comply with both these Promotion Terms and the terms and conditions of your MyMonty Customer Agreement.</p>


                    <h2 className="mt-10">Who is eligible for the promotion?</h2>
                    <p>To be eligible for this Promotion, you must have an active MyMonty personal eWallet account (not suspended, closed or restricted).</p>


                    <h2 className="mt-10">How do I benefit from discounts?</h2>
                    <p>
                        <strong>MyMonty Customers discounts</strong><br />
                        If you are a MyMonty Customer, you will receive the following discounts on purchases you make with your physical MyMonty prepaid card or MyMonty eWallet (via QR) at KH POS during the Promotion Period:
                    </p>
                    
                    <ul>
                        <li>10% of Khoury Home products (excluding mobile phones and products on sale); and</li>
                        <li>20% of La Maison Khoury Home products (excluding products on sale).</li>
                    </ul>
                


                    <h2 className="mt-10">What other legal information should I know?</h2>
                    <ol>
                        <li>This Promotion is offered by Monty Finance S.A.L. in collaboration with Khoury Home Appliances S.A.L.</li>
                        <li>We may suspend or end the Promotion at any time before the end of the Promotion Period, if, in our reasonable opinion, the Promotion is being abused or may negatively affect our goodwill, reputation or commercial interests.</li>
                        <li>We can cancel this Promotion or change these Promotion Terms at any time. We will give you a notice through MyMonty application and SMS.</li>
                        <li>If we have reasonable grounds to believe that you have engaged in any fraud or material abuse of this Promotion (such as for example attempting to obtain an unfair advantage through deception) we may in our sole discretion take any actions we see fit in the circumstances, including but not limited to revoking your eligibility for Discounts.</li>
                        <li>To the extent permitted by law, these Promotion Terms shall be exclusively governed by and construed in accordance with the laws of Lebanon. Any disputes arising out of or in connection with these terms shall exclusively be submitted to and dealt with by the competent court in Beirut. </li>
                    </ol>
            
                </div>
            </div>

        </div>
    )
}

export default khterms;
