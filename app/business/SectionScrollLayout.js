"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionScrollLayout({ title, sections = [], children }) {
	const [activeSection, setActiveSection] = useState(sections?.[0]?.id || "");
	const mobileNavRef = useRef(null);
	const buttonRefs = useRef({});

	useEffect(() => {
		if (!sections.length) return;

		const getActiveSection = () => {
			const scrollPosition = window.scrollY + 180;
			let currentSection = sections[0]?.id || "";

			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (!el) continue;

				if (el.offsetTop <= scrollPosition) {
					currentSection = section.id;
				}
			}

			setActiveSection(currentSection);
		};

		getActiveSection();

		window.addEventListener("scroll", getActiveSection, { passive: true });
		window.addEventListener("resize", getActiveSection);

		return () => {
			window.removeEventListener("scroll", getActiveSection);
			window.removeEventListener("resize", getActiveSection);
		};
	}, [sections]);

	useEffect(() => {
		const activeButton = buttonRefs.current[activeSection];
		if (!activeButton) return;

		activeButton.scrollIntoView({
			behavior: "smooth",
			inline: "center",
			block: "nearest",
		});
	}, [activeSection]);

	const scrollToSection = (id) => {
		setActiveSection(id);

		const el = document.getElementById(id);
		if (!el) return;

		const isMobile = window.innerWidth < 768;
		const yOffset = isMobile ? 150 : 120;
		const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;

		window.scrollTo({
			top: y,
			behavior: "smooth",
		});
	};

	const stickyTopClass =
		"top-[calc(var(--header-height)+12px)] [body.menu-hidden_&]:top-3";

	return (
		<main className="min-h-screen bg-black px-4 py-8 text-white md:px-10 md:py-10">
			<div className="container">
				{title ? (
					<h1 className="mb-8 text-center text-3xl font-extrabold uppercase tracking-tight md:mb-10 md:text-5xl">
						{title}
					</h1>
				) : null}

				<div className="md:flex md:items-start md:gap-5">
					{/* Mobile sticky horizontal nav */}
					<div className={`sticky z-30 -mx-4 mb-5 md:hidden ${stickyTopClass}`}>
						<div className="px-4">
							<div className="rounded-[24px] border border-white/10 bg-[#0B0D11]/85 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md">
								<div
									ref={mobileNavRef}
									className="flex gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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
												onClick={() => scrollToSection(section.id)}
												className={`group flex min-w-[86px] shrink-0 flex-col items-center justify-center rounded-[18px] px-3 py-3 text-center transition-all duration-300 ${
													isActive
														? "bg-[#2893FF] shadow-[0_8px_20px_rgba(40,147,255,0.35)]"
														: "bg-white/[0.04] hover:bg-white/[0.08]"
												}`}
											>
												{section.icon ? (
													<img
														src={section.icon}
														alt={section.label}
														className={`h-[17px] w-[17px] object-contain transition-all duration-300 ${
															isActive ? "opacity-100" : "opacity-90"
														}`}
													/>
												) : null}

												{section.label ? (
													<span
														className={`mt-2 text-[11px] font-medium leading-tight transition-all duration-300 ${
															isActive ? "text-white" : "text-white/85"
														}`}
													>
														{section.label}
													</span>
												) : null}
											</button>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					{/* Desktop vertical sidebar */}
					<aside
						className={`sticky hidden w-[110px] shrink-0 transition-all duration-300 ease-in-out md:block ${stickyTopClass}`}
					>
						<div className="flex flex-col gap-2">
							{sections.map((section) => {
								const isActive = activeSection === section.id;

								return (
									<button
										key={section.id}
										type="button"
										onClick={() => scrollToSection(section.id)}
										className={`flex h-[78px] w-full flex-col items-center justify-center rounded-l-2xl transition-all ${
											isActive
												? "bg-[#2893FF]"
												: "bg-[#11131C] hover:bg-[#171923]"
										}`}
									>
										{section.icon ? (
											<img
												src={section.icon}
												alt={section.label}
												className="h-[18px] w-[18px] object-contain"
											/>
										) : null}

										{section.label ? (
											<span className="mt-2 text-[12px] font-bold">
												{section.label}
											</span>
										) : null}
									</button>
								);
							})}
						</div>
					</aside>

					<section className="flex-1 rounded-[24px] bg-[#11131C] px-5 py-6 md:rounded-r-[26px] md:rounded-l-none md:px-8 md:py-8">
						{children}
					</section>
				</div>
			</div>
		</main>
	);
}