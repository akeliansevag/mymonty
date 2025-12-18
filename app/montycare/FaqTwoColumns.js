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
                          <p className={`mt-2 text-[13px] leading-relaxed ${answerColor}`}>
                            {item.a}
                          </p>
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
    a: "Montycare is a Platinum USD Credit Card designed exclusively for Health & Beauty spending. It provides a flexible revolving credit line, powered by MyMonty Wallet, and accepted only via MontyPay POS at partner clinics across Lebanon.",
  },
  { q: "What can I use Montycare for?", a: "Answer goes here." },
  { q: "Where can I use Montycare?", a: "Answer goes here." },
  { q: "How do I apply for Montycare?", a: "Answer goes here." },
  {
    q: "What is the expected review time for my Montycare application?",
    a: "Answer goes here.",
  },
];

const DEFAULT_RIGHT = [
  {
    q: "What is Montycare?",
    a: "Montycare is Lebanon’s first Health & Beauty Platinum credit card, offering patients a USD revolving credit line dedicated to medical, cosmetic, dental, dermatology, and wellness procedures. It is powered by MyMonty wallet and accepted exclusively through MontyPay POS.",
  },
  { q: "How does Montycare benefit my clinic?", a: "Answer goes here." },
  {
    q: "Why should my clinic accept Montycare if we accept other cards?",
    a: "Answer goes here.",
  },
  { q: "How do patients use Montycare card at our clinic?", a: "Answer goes here." },
  { q: "How do we join the partner network?", a: "Answer goes here." },
];