'use client';

import React, { useState } from "react";
import styles from "./page.module.css";
import SmallBanner from "../components/SmallBanner";

const TABS = ["Personal", "Teens", "Business"];

const DATA = {
    Personal: [
        { title: "KFS Personal eWallet Account", pdf: "/kfs/Individual-eWallet-Account-27.1.26-KFS.pdf" },
        { title: "KFS Standard Prepaid Card", pdf: "/kfs/Standard-Prepaid-Card-KFS.pdf" },
        { title: "KFS Gold Prepaid Card", pdf: "/kfs/Gold-Prepaid-Card-KFS.pdf" },
        { title: "KFS Platinum Prepaid Card", pdf: "/kfs/Platinum-Prepaid-Card-KFS.pdf" },
        { title: "KFS Virtual Prepaid Card", pdf: "/kfs/Virtual-Prepaid-Card-KFS.pdf" },
        { title: "KFS Platinum Credit Card", pdf: "/kfs/Platinum-Credit-Card-KFS-Offline.pdf" },
        { title: "KFS World Elite Credit Card", pdf: "/kfs/World-Elite-Credit-Card-KFS-Offline.pdf" },
        { title: "KFS World Elite Prepaid Card", pdf: "/kfs/World-Elite-Prepaid-Card-KFS.pdf" },
        { title: "KFS Euro Platinum Credit Card", pdf: "/kfs/Euro-Credit-Card-KFS-Offline.pdf" },
        { title: "KFS Euro Platinum Prepaid Card", pdf: "/kfs/Euro-Platinum-Prepaid-Card-KFS.pdf" },
    ],
    Teens: [
        { title: "KFS Teens Standard Prepaid Card", pdf: "/kfs/Under-18-Standard-Card.pdf" },
        { title: "KFS Teens Platinum Prepaid Card", pdf: "/kfs/Under-18-Platinum-Card.pdf" },
    ],
    Business: [
        { title: "KFS Business eWallet Account", pdf: "/kfs/BUSINESS-eWALLET-26.01.26-KFS.pdf" },
        { title: "KFS Platinum Prepaid Card", pdf: "/kfs/Business-Platinum-Prepaid-Card-KFS.pdf" },
        { title: "KFS Virtual Prepaid Card", pdf: "/kfs/Business-Virtual-Prepaid-Card-KFS.pdf" },
        { title: "KFS World Elite Prepaid Card", pdf: null },
    ],
};

export default function KfsDocuments() {
    const [activeTab, setActiveTab] = useState("Personal");

    return (
        <div className={styles.terms}>
            <SmallBanner title="Key Facts Statements" />

            <div className="container py-10 lg:py-20">
                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="bg-gray-100 rounded-full p-1 flex gap-1">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition
                            ${activeTab === tab
                                        ? "bg-black text-white"
                                        : "text-gray-500 hover:text-black"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {DATA[activeTab].map(({ title, pdf }) =>
                        <div
                            key={title}
                            className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between min-h-[120px]"
                        >
                            <h3 className="text-xl text-gray-900">
                                {title}
                            </h3>

                            <a
                                href={pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 w-fit bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-full transition"
                            >
                                Open PDF
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
