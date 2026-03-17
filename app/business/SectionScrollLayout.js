"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionScrollLayout({
  title,
  sections = [],
  children,
  defaultSection,
}) {
  const [activeSection, setActiveSection] = useState(
    defaultSection || sections?.[0]?.id || ""
  );

  const navRef = useRef(null);
  const buttonRefs = useRef({});
	const containerRef = useRef(null);

	const scrollToContainer = () => {
  if (!containerRef.current) return;

  const yOffset = 120; // adjust depending on header height
  const y =
    containerRef.current.getBoundingClientRect().top +
    window.pageYOffset -
    yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

  useEffect(() => {
    if (!sections.length) return;
    if (!activeSection) {
      setActiveSection(defaultSection || sections[0].id);
    }
  }, [sections, defaultSection, activeSection]);

  useEffect(() => {
    const activeButton = buttonRefs.current[activeSection];
    if (!activeButton) return;

    activeButton.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeSection]);

  const stickyTopClass =
    "top-[calc(var(--header-height)+12px)] [body.menu-hidden_&]:top-3";

  const childrenArray = Array.isArray(children) ? children : [children];

  const activeChild = childrenArray.find(
    (child) => child?.props?.id === activeSection
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-black px-4 py-8 text-white md:px-10 md:py-10">
      <div className="container">
        {title ? (
          <h1 className="mb-8 text-center text-3xl font-extrabold uppercase tracking-tight md:mb-10 md:text-5xl">
            {title}
          </h1>
        ) : null}

        <div className={`sticky z-30 mb-6 ${stickyTopClass}`}>
          <div className="rounded-full border border-white/10 bg-[#07090D] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
            <div
              ref={navRef}
              className="flex justify-between items-center gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <button
                    key={section.id}
                    ref={(el) => {
                      buttonRefs.current[section.id] = el;
                    }}
                    type="button"
                    onClick={() => {
						setActiveSection(section.id);
						scrollToContainer();
					}}
                    className={`shrink-0 whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 md:px-6 md:py-3.5 md:text-[15px] ${
                      isActive
                        ? "bg-[#2893FF] text-white shadow-[0_8px_20px_rgba(40,147,255,0.35)]"
                        : "bg-transparent text-white/45 hover:text-white/75"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <section className="rounded-[24px] bg-[#11131C] px-5 py-6 md:px-8 md:py-8">
          <div key={activeSection} className="animate-offer-content">
            {activeChild}
          </div>
        </section>
      </div>
    </main>
  );
}