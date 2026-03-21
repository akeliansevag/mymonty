"use client";

import React, { useMemo, useState } from "react";

export default function FaqTwoColumns({
  leftTitle = "FOR USERS",
  rightTitle = "FOR PARTNER CLINICS",
  leftItems = DEFAULT_LEFT,
  rightItems = DEFAULT_RIGHT,
  defaultOpenLeft = 0,
  defaultOpenRight = 0,
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className="grid gap-12 md:grid-cols-2">
        <FaqColumn
          title={leftTitle}
          items={leftItems}
          variant="light"
          defaultOpen={defaultOpenLeft}
        />
        <FaqColumn
          title={rightTitle}
          items={rightItems}
          variant="dark"
          defaultOpen={defaultOpenRight}
        />
      </div>
    </section>
  );
}

function FaqColumn({ title, items, variant = "light", defaultOpen = 0 }) {
  const safeDefault = useMemo(() => {
    if (!items?.length) return -1;
    return Math.min(Math.max(defaultOpen, 0), items.length - 1);
  }, [items, defaultOpen]);

  const [openIndex, setOpenIndex] = useState(safeDefault);

  const expandedCard =
    variant === "dark" ? "bg-neutral-900 text-white" : "bg-white text-neutral-950";

  const questionColor =
    variant === "dark" ? "text-white" : "text-neutral-900";

  const answerColor =
    variant === "dark" ? "text-white/70" : "text-neutral-600";

  const iconColorClosed = "text-neutral-500";
  const iconColorOpen = variant === "dark" ? "text-white" : "text-neutral-700";

  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950">
        {title}
      </h2>

      <div className="mt-6 space-y-5">
        {items.map((item, idx) => {
          const isOpen = idx === openIndex;

          return (
            <div key={item.q} className="w-full">
              {/* Always the same box size/padding -> no shifting */}
              <div
                className={[
                  "rounded-2xl transition-colors duration-200",
                  isOpen ? expandedCard : "bg-transparent",
                ].join(" ")}
              >
                <button
                  type="button"
                  className="w-full px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <div className="text-[15px] font-semibold leading-snug">
                        <span className={isOpen ? questionColor : "text-neutral-900"}>
                          {item.q}
                        </span>
                      </div>

                      {/* Answer space is revealed without changing outer padding */}
                      <div
                        className={[
                          "grid transition-[grid-template-rows] duration-200 ease-out",
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        ].join(" ")}
                      >
                        <div className="overflow-hidden">
                          {/* margin stays constant (so the question line never jumps) */}
                          <div
                            className={`mt-2 text-[13px] leading-relaxed ${answerColor}`}
                            dangerouslySetInnerHTML={{ __html: item.a }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Fixed-size icon wrapper -> no shifting */}
                    <span
                      className={[
                        "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                        "border border-neutral-300",
                        isOpen ? iconColorOpen : iconColorClosed,
                        // keep border/background stable
                        "bg-transparent",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <path
        d="M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Example content (replace with your real FAQ copy) */
const DEFAULT_LEFT = [
  {
    q: "What is Montycare?",
    a: `<p>Montycare is a Platinum USD Credit Card designed exclusively for Health & Beauty spending. It provides a flexible revolving credit line, powered by MyMonty Wallet, and accepted via MontyPay POS at partner clinics across Lebanon, as well as all out-of-network merchant POS devices.</p>`,
  },
  {
    q: "What can I use Montycare for?",
    a: `<p>Montycare can be used at all Montycare partner health and beauty providers. At partner clinics, cardholders benefit from Montycare payment facilities, namely the grace period financing option.</p>
        <p class="mt-3">The card can also be used at merchants outside the Montycare network wherever the card is accepted; however, Montycare financing benefits apply only at partner clinics.</p>
        <p class="mt-3">All Montycare transactions earn cashback.</p>`,
  },
  {
    q: "Where can I use Montycare?",
    a: `<p>Montycare is accepted at all partner clinics, where exclusive benefits are unlocked. The card is also accepted at all merchants accepting Mastercard.</p>
        <p class="mt-3">You can check the list of partners directly through the MyMonty app or by asking your clinic directly.</p>`,
  },
  {
    q: "How do I apply for Montycare?",
    a: `<p>Applying for Montycare is simple and fully digital:</p>
        <ol class="list-decimal pl-5 my-3">
          <li>Download the MyMonty app (via the Montycare landing page, partner clinics, or the App Store).</li>
          <li>Create your MyMonty wallet account</li>
          <li>Submit your Montycare credit card application in the app</li>
          <li>Our Credit Team reviews your application</li>
          <li>You will receive the approval decision directly in the app</li>
          <li>Once approved, your Montycare card will be issued and activated through MyMonty</li>
        </ol>`,
  },
  {
    q: "What is the expected review time for my Montycare application?",
    a: `<p>The standard review time is up to 48 hours. You will receive the decision directly in the MyMonty app once the review is complete.</p>`,
  },
];

const DEFAULT_RIGHT = [
  {
    q: "What is Montycare?",
    a: `<p>Montycare is Lebanon’s first Health & Beauty Platinum credit card, designed to help patients finance medical, aesthetic, dental, dermatology, and wellness procedures.</p>
        <p class="mt-3">It provides patients with a USD revolving credit line, allowing them to pay for treatments while the clinic receives payment through MontyPay POS, just like a standard card transaction.</p>`,
  },
  {
    q: "How does Montycare benefit my clinic?",
    a: `<ul class="list-disc pl-5 my-3">
          <li>Higher acceptance of treatment plans</li>
          <li>Reduced cancellations due to cost barriers</li>
          <li>Increased average treatment value</li>
          <li>Attracts new patients seeking financing options</li>
          <li>No repayment risk for the clinic — Monty Finance manages patient repayment</li>
        </ul>`,
  },
  {
    q: "Why should my clinic accept Montycare if we accept other cards?",
    a: `<p>Standard cards do not offer 0% interest financing for medical and aesthetic procedures.</p>
        <p class="mt-3">Montycare helps patients say “yes” to treatments more easily, while your clinic receives settlement through MontyPay POS, with Monty Finance managing the patient repayment.</p>`,
  },
  {
    q: "How do we join the partner network?",
    a: `<p>Clinics and doctors can join the Montycare partner network by:</p>
        <ul class="list-disc pl-5 my-3">
          <li>Submitting the interest form on the Montycare website (link to be added)</li>
          <li>Contacting the Montycare team directly at +961 1 734 020</li>
          <li>Reaching out through MontyPay if your clinic already uses a MontyPay POS</li>
        </ul>`,
  },
  {
    q: "What clinics can join the network?",
    a: `<p>Montycare partners with clinics and providers in the health and beauty sector, including:</p>
        <ul class="list-disc pl-5 my-3">
          <li>Aesthetics and cosmetic centers</li>
          <li>Dermatology clinics</li>
          <li>Dental clinics</li>
          <li>Wellness and rejuvenation centers</li>
          <li>Other approved health and beauty providers</li>
        </ul>`,
  },
];