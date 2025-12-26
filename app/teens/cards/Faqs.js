'use client';
import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is a Teen Card?',
    answer:
      'A teen card is a supervised prepaid card for ages 11-17. Parents can top up, track, and manage from the MyMonty app.',
  },
  {
    question: 'How Many Teen Cards can I Issue?',
    answer:
      'A household can issue up to five (5) Teen Cards, with one card per child, subject to approval.',
  },
  {
    question: 'How can I order a Teen Card?',
    answer:
      '<p>You can order a Teen Card directly through the MyMonty app by following these steps:</p><ul><li>Open the MyMonty app.</li><li>Tap on &ldquo;Cards&rdquo;.</li><li>Select &ldquo;+ New&rdquo;.</li><li>Choose &ldquo;Physical Card&rdquo;.</li><li>Select &ldquo;Teen Card&rdquo;.</li><li>Choose the card tier: Standard or Platinum.</li><li>Pick your preferred card design.</li><li>Select your delivery option: Delivery Address or Pick Up</li><li>Enter your teen&rsquo;s details: Full name, Date of birth, Gender, and Mobile number.</li><li>Upload the required supporting documents for your teen.</li><li>Review and accept the card&rsquo;s Terms &amp; Conditions and Key Facts Statement (KFS).</li><li>Tap &ldquo;Place Order&rdquo;.</li><li>Confirm using your eWallet passcode or biometric authentication.</li></ul><p>Once submitted, your teen&rsquo;s card request will be reviewed.</p><p>Upon approval, the card will be issued and delivered according to your selected delivery method.</p>',
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-20 overflow-x-hidden">
      <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-none text-center uppercase">
        FAQ
      </h2>

      <div className="container space-y-4 mt-16">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-10 cursor-pointer transition-colors ${
                isOpen ? 'bg-[#F9FAFB]' : 'bg-transparent'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <button
                type="button"
                className="flex justify-between gap-5 w-full text-left items-center"
                aria-expanded={isOpen}
              >
                <span className="text-xl sm:text-2xl">{faq.question}</span>

                <div className="w-[24px] h-[24px] shrink-0 rounded-full flex items-center justify-center border-[2px] border-[#98A2B3]">
                  <span className="text-[#98A2B3] font-bold leading-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Smooth height animation without max-height */}
              <div
                className={`mt-3 grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className="text-[#475467] text-lg [&_p]:mt-3 first:[&_p]:mt-0 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div className="text-center">
          <button className="mm-button mt-8">View Fees &amp; Limits</button>
        </div>
      </div>
    </section>
  );
};

export default Faqs;